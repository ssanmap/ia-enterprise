import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { FiSend, FiMapPin, FiPhone, FiMail, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import { useState } from "react";
import { motion } from "framer-motion";

// Schema de validación
const schema = z.object({
  name: z.string().min(2, { message: "Mínimo 2 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  message: z.string().min(10, { message: "Mínimo 10 caracteres" }),
});

type FormData = z.infer<typeof schema>;

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Llamada a tu API de SolverIA
      const response = await fetch('https://api.solveria.cl/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'contacto@solveria.cl',
          subject: `Nuevo mensaje de ${data.name}`,
          html: `
            <h3>Nuevo mensaje desde el formulario de contacto</h3>
            <p><strong>Nombre:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Mensaje:</strong></p>
            <p>${data.message}</p>
          `,
          clientName: "Solveria"
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        throw new Error("Error en la respuesta del servidor");
      }
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-24 bg-gradient-to-b from-gray-50 to-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
              Conversemos
            </span>{" "}
            sobre tu proyecto
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Completa el formulario y nuestro equipo de expertos en IA te contactará para una consultoría gratuita
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Formulario */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-300"
          >
            <div className="p-8 sm:p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <span className="w-8 h-8 bg-blue-200 text-blue-600 rounded-full flex items-center justify-center mr-3">
                  <FiMail className="w-4 h-4" />
                </span>
                Formulario de contacto
              </h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre completo *
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register("name")}
                    disabled={isSubmitting}
                    className="w-full px-5 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"
                    placeholder="Ej: Juan Pérez"
                  />
                  {errors.name && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 text-sm text-red-600 flex items-center"
                    >
                      <FiAlertCircle className="mr-1" /> {errors.name.message}
                    </motion.p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Correo electrónico *
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    disabled={isSubmitting}
                    className="w-full px-5 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"
                    placeholder="ejemplo@solveria.cl"
                  />
                  {errors.email && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 text-sm text-red-600 flex items-center"
                    >
                      <FiAlertCircle className="mr-1" /> {errors.email.message}
                    </motion.p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    ¿Cómo podemos ayudarte? *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    {...register("message")}
                    disabled={isSubmitting}
                    className="w-full px-5 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"
                    placeholder="Describe tu proyecto, necesidades o consulta..."
                  ></textarea>
                  {errors.message && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 text-sm text-red-600 flex items-center"
                    >
                      <FiAlertCircle className="mr-1" /> {errors.message.message}
                    </motion.p>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl shadow-lg transition-all ${
                      isSubmitting
                        ? "bg-blue-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white hover:shadow-xl hover:-translate-y-0.5"
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                      </span>
                    ) : (
                      <>
                        Enviar mensaje <FiSend className="ml-3" />
                      </>
                    )}
                  </button>
                </div>
              </form>

              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 text-green-700 bg-green-50 rounded-lg border border-green-100 flex items-start"
                >
                  <FiCheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                  <div>
                    <p className="font-medium">¡Mensaje enviado con éxito!</p>
                    <p className="text-sm">Nuestro equipo te contactará dentro de 24 horas.</p>
                  </div>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 text-red-700 bg-red-50 rounded-lg border border-red-100 flex items-start"
                >
                  <FiAlertCircle className="h-5 w-5 text-red-500 mt-0.5 mr-2" />
                  <div>
                    <p className="font-medium">Error al enviar el mensaje</p>
                    <p className="text-sm">Por favor intenta nuevamente o contáctanos directamente.</p>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">
                  <FiMapPin className="w-4 h-4" />
                </span>
                Oficina Central
              </h3>
              <p className="text-gray-600 mb-6">
                Av. Andrés Bello 2425, Oficina 501<br />
                Providencia, Santiago de Chile
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <FiMail className="flex-shrink-0 h-5 w-5 text-blue-500 mt-0.5 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Correo electrónico</p>
                    <a href="mailto:contacto@solveria.cl" className="text-blue-600 hover:underline">contacto@solveria.cl</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <FiPhone className="flex-shrink-0 h-5 w-5 text-blue-500 mt-0.5 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Teléfono</p>
                    <a href="tel:+56223456789" className="text-blue-600 hover:underline">+56 2 2345 6789</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center mr-3">
                  <FiCheckCircle className="w-4 h-4" />
                </span>
                ¿Por qué elegirnos?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-600">Respuesta en menos de 24 horas</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-600">Consultoría inicial sin costo</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-600">Equipo certificado en IA y Big Data</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-600">Soluciones personalizadas para tu industria</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};