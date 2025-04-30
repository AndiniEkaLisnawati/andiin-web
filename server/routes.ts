import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post('/api/contacts', async (req: Request, res: Response) => {
    try {
      // Validate the request body using our schema
      const validatedData = insertContactSchema.parse(req.body);
      
      // Store the contact form submission in the database
      const contact = await storage.createContact(validatedData);
      
      // Return the created contact
      res.status(201).json({ 
        success: true,
        message: "Contact form submitted successfully",
        data: contact 
      });
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
        console.error("Error submitting contact form:", error);
        res.status(500).json({ 
          success: false, 
          message: "An error occurred while submitting the form" 
        });
      }
    }
  });

  // Get all contact form submissions (admin route)
  app.get('/api/contacts', async (_req: Request, res: Response) => {
    try {
      const contacts = await storage.getAllContacts();
      res.status(200).json({ 
        success: true, 
        data: contacts 
      });
    } catch (error) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({ 
        success: false, 
        message: "An error occurred while fetching contacts" 
      });
    }
  });

  // Get a specific contact by ID (admin route)
  app.get('/api/contacts/:id', async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ 
          success: false, 
          message: "Invalid ID format" 
        });
      }

      const contact = await storage.getContact(id);
      
      if (!contact) {
        return res.status(404).json({ 
          success: false, 
          message: "Contact not found" 
        });
      }
      
      res.status(200).json({ 
        success: true, 
        data: contact 
      });
    } catch (error) {
      console.error("Error fetching contact:", error);
      res.status(500).json({ 
        success: false, 
        message: "An error occurred while fetching the contact" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
