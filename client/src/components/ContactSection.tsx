import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { RectangleEllipsis, MapPin, Phone, Linkedin, Github, Twitter, Dribbble, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    
    try {
      // Send form data to our API
      const response = await fetch('/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      
      if (response.ok) {
        // On success, show success message
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        form.reset();
      } else {
        // On failure, show error message
        toast({
          title: "Error sending message",
          description: result.message || "There was a problem submitting your message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error sending contact form:", error);
      toast({
        title: "Connection error",
        description: "Could not connect to the server. Please check your internet connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-br from-accent to-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4 text-gray-900">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary/60 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">Have a project in mind or want to discuss potential opportunities? Feel free to reach out!</p>
        </motion.div>
        
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
          <motion.div 
            className="md:w-2/5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="font-poppins font-semibold text-xl mb-6 text-gray-800">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-accent rounded-full p-3 mr-4">
                    <RectangleEllipsis className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-1">Email</h4>
                    <a href="mailto:janedoe@example.com" className="text-gray-600 hover:text-primary transition-colors">janedoe@example.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-accent rounded-full p-3 mr-4">
                    <MapPin className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-1">Location</h4>
                    <p className="text-gray-600">Jakarta, Indonesia</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-accent rounded-full p-3 mr-4">
                    <Phone className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-1">Phone</h4>
                    <a href="tel:+6281234567890" className="text-gray-600 hover:text-primary transition-colors">+62 812 3456 7890</a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium text-gray-700 mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  <a href="#" className="social-icon bg-accent hover:bg-accent/80 text-primary p-3 rounded-full transition-all duration-300">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="social-icon bg-accent hover:bg-accent/80 text-primary p-3 rounded-full transition-all duration-300">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="#" className="social-icon bg-accent hover:bg-accent/80 text-primary p-3 rounded-full transition-all duration-300">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="social-icon bg-accent hover:bg-accent/80 text-primary p-3 rounded-full transition-all duration-300">
                    <Dribbble className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-3/5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="font-poppins font-semibold text-xl mb-6 text-gray-800">Send Me a Message</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-700">Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your name" 
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-700">Email</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="your.email@example.com" 
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">Subject</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="What is this about?" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Your message here..." 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
                            rows={4}
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg w-full sm:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
