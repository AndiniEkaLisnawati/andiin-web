import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { RectangleEllipsis, MapPin, Phone, Linkedin, Github, Twitter, Dribbble, Loader2, Instagram, Flower } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

// Form validation schema - hanya 3 field sesuai permintaan
const formSchema = z.object({
  name: z.string().min(2, { message: "Nama lengkap harus diisi (minimal 2 karakter)." }),
  email: z.string().email({ message: "Masukkan alamat email yang valid." }),
  message: z.string().min(10, { message: "Pesan harus diisi (minimal 10 karakter)." }),
  subject: z.string().min(3, {message: "subjek harus diidi (minimal 3 karakter)."})
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
      const templateParams = {
        nama: data.name,
        subjek:data.subject,
        email: data.email,
        pesan: data.message,
        penerima: 'andiniekalisnawatililis2@gmail.com', // pastikan ini digunakan di template
        // jika ada variabel lain yang diperlukan di template, tambahkan di sini
      };

      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const userId = import.meta.env.VITE_EMAILJS_USER_ID; // public key (sebelumnya disebut user ID)

      console.log('Service ID:', serviceId);
      console.log('Template ID:', templateId);
      console.log('User ID / Public Key:', userId);

      const response = await emailjs.send(serviceId, templateId, templateParams, userId);

      console.log('Berhasil mengirim email:', response);

      toast({
        title: "Pesan Terkirim!",
        description: "Terima kasih telah menghubungi. Saya akan segera merespons.",
      });

      form.reset();
    } catch (error) {
      console.error("Error mengirim pesan:", error);

      toast({
        title: "Gagal Mengirim Pesan",
        description: "Terjadi kesalahan saat mengirim pesan. Silakan coba lagi nanti.",
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
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4 text-gray-900">Hubungi Saya</h2>
          <div className="w-20 h-1 bg-primary/60 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">Punya proyek dalam pikiran atau ingin mendiskusikan potensi kerjasama? Jangan ragu untuk menghubungi!</p>
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
              <h3 className="font-poppins font-semibold text-xl mb-6 text-gray-800">Informasi Kontak</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-accent rounded-full p-3 mr-4">
                    <RectangleEllipsis className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-1">Email</h4>
                    <a href="mailto:andiniekalisnawatilili2@gmail.com" className="text-gray-600 hover:text-primary transition-colors">andiniekalisnawatilili2@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-accent rounded-full p-3 mr-4">
                    <MapPin className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-1">Lokasi</h4>
                    <p className="text-gray-600">Jakarta, Indonesia</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-accent rounded-full p-3 mr-4">
                    <Phone className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-1">Telepon</h4>
                    <a href="tel:+6281234567890" className="text-gray-600 hover:text-primary transition-colors">+62 812 3456 7890</a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium text-gray-700 mb-4">Terhubung dengan saya</h4>
                <div className="flex space-x-4">
                <a href="#" className="social-icon bg-accent hover:bg-accent/80 text-primary p-3 rounded-full transition-all duration-300">
                <Flower className="h-5 w-5" />
                </a>
                  <a href="https://www.linkedin.com/in/andiniekalisnawati" className="social-icon bg-accent hover:bg-accent/80 text-primary p-3 rounded-full transition-all duration-300">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="https://github.com/AndiniEkaLisnawati" className="social-icon bg-accent hover:bg-accent/80 text-primary p-3 rounded-full transition-all duration-300">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="https://www.instagram.com/sy.andnnn" className="social-icon bg-accent hover:bg-accent/80 text-primary p-3 rounded-full transition-all duration-300">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="social-icon bg-accent hover:bg-accent/80 text-primary p-3 rounded-full transition-all duration-300">
                    <Flower className="h-5 w-5" />
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
              <h3 className="font-poppins font-semibold text-xl mb-6 text-gray-800">Kirim Pesan</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-700">Nama Lengkap</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Nama lengkap Anda" 
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
                              placeholder="email@contoh.com" 
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
                        <FormLabel className="text-sm font-medium text-gray-700">Pesan</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tulis pesan Anda di sini..." 
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
                        Mengirim...
                      </>
                    ) : (
                      "Kirim Pesan"
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
