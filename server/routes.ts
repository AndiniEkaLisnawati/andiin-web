import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { sendEmail, EmailData } from "./emailService";

// Email validation schema
const emailSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint - now sends email instead of saving to DB
  app.post('/api/contacts', async (req: Request, res: Response) => {
    try {
      // Validate the request body using our schema
      const validatedData = emailSchema.parse(req.body);
      
      // Prepare email data
      const emailData: EmailData = {
        name: validatedData.name,
        email: validatedData.email,
        subject: validatedData.subject,
        message: validatedData.message
      };
      
      // Send email
      const success = await sendEmail(emailData);
      
      if (success) {
        // Return success response
        res.status(200).json({ 
          success: true,
          message: "Email sent successfully"
        });
      } else {
        // Email service failed
        res.status(500).json({ 
          success: false,
          message: "Failed to send email" 
        });
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Handle validation errors
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        // Handle other errors
        console.error("Error sending email:", error);
        res.status(500).json({ 
          success: false, 
          message: "An error occurred while sending the email" 
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
