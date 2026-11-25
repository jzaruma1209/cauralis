import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Términos del Servicio",
  description:
    "Condiciones de uso de los servicios de Cauralis: chatbots, automatización de mensajería y desarrollo de software.",
  alternates: { canonical: "/terminos" },
};

const ultimaActualizacion = "25 de noviembre de 2026";

export default function TerminosPage() {
  return (
    <div className="mx-auto max-w-[760px] px-5 pb-24 pt-32 sm:px-6 lg:pt-40">
      <p className="eyebrow">Legal</p>
      <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
        Términos del Servicio
      </h1>
      <p className="mt-5 text-sm text-subtle">Última actualización: {ultimaActualizacion}</p>

      <div className="mt-12 space-y-12 leading-relaxed text-muted-foreground [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-foreground [&_li]:ml-5 [&_li]:list-disc [&_strong]:text-foreground [&_ul]:mt-4 [&_ul]:space-y-2">
        <p>
          Estos términos regulan el uso del sitio web de <strong>Cauralis</strong> y de los servicios de
          chatbots, automatización de mensajería y desarrollo de software que ofrecemos. Al usar el sitio,
          escribirnos por WhatsApp o Messenger, o contratar un servicio, aceptas lo descrito aquí.
        </p>

        <section id="quienes-somos" className="space-y-4">
          <h2>1. Quiénes somos</h2>
          <p>
            Cauralis es operada por <strong>Villamar Zaruma Kerly Michelle</strong>, empresa de desarrollo de
            software dedicada a chatbots y automatización de mensajería, con domicilio en Homero Reyes S/N,
            frente a Innova, La Troncal, Cañar, Ecuador.
          </p>
        </section>

        <section id="servicios" className="space-y-4">
          <h2>2. Qué servicios ofrecemos</h2>
          <ul>
            <li>Creación y configuración de asistentes virtuales (chatbots) para WhatsApp y Messenger.</li>
            <li>Automatización de procesos de atención al cliente, ventas y seguimiento.</li>
            <li>Integración con otras herramientas del negocio del cliente.</li>
            <li>Desarrollo de sitios web y software a medida.</li>
          </ul>
          <p>
            El alcance, el precio, los plazos y la forma de pago de cada servicio se acuerdan por escrito con
            el cliente, por ejemplo mediante una propuesta o un mensaje de confirmación. Lo acordado en ese
            documento prevalece sobre estos términos generales.
          </p>
        </section>

        <section id="uso-aceptable" className="space-y-4">
          <h2>3. Uso aceptable</h2>
          <p>Quien use nuestros servicios se compromete a no utilizarlos para:</p>
          <ul>
            <li>Enviar spam, mensajes masivos no solicitados o contenido engañoso.</li>
            <li>Escribir a personas que no hayan dado su consentimiento para recibir mensajes.</li>
            <li>Difundir contenido ilegal, ofensivo, fraudulento o que vulnere derechos de terceros.</li>
            <li>Intentar acceder sin autorización a nuestros sistemas o a los de otros clientes.</li>
          </ul>
          <p>
            Podemos suspender un servicio si detectamos un uso contrario a estos términos o a las políticas de
            las plataformas de mensajería.
          </p>
        </section>

        <section id="plataformas" className="space-y-4">
          <h2>4. Plataformas de terceros</h2>
          <p>
            Nuestros servicios funcionan sobre plataformas de terceros, como WhatsApp Business Platform y
            Messenger, de <strong>Meta Platforms, Inc.</strong> El cliente debe cumplir también los términos y
            políticas de esas plataformas, incluidas sus reglas sobre mensajes y plantillas. Meta puede
            cambiar sus condiciones, límites o precios, o limitar una cuenta, sin que eso dependa de Cauralis.
          </p>
        </section>

        <section id="responsabilidades" className="space-y-4">
          <h2>5. Responsabilidades del cliente</h2>
          <ul>
            <li>Dar información veraz y los accesos necesarios para configurar el servicio.</li>
            <li>Contar con la autorización de las personas a quienes les escriba su asistente virtual.</li>
            <li>Revisar que el contenido y las respuestas configuradas sean correctos para su negocio.</li>
            <li>Mantener en reserva sus claves y accesos, y avisarnos si cree que fueron comprometidos.</li>
          </ul>
        </section>

        <section id="disponibilidad" className="space-y-4">
          <h2>6. Disponibilidad del servicio</h2>
          <p>
            Hacemos lo razonable para que los servicios estén disponibles de forma continua. Pueden existir
            interrupciones por mantenimiento, fallas de proveedores de infraestructura o de las plataformas de
            mensajería, por lo que no garantizamos un funcionamiento ininterrumpido. Las respuestas
            automáticas se generan con inteligencia artificial y pueden contener errores.
          </p>
        </section>

        <section id="propiedad" className="space-y-4">
          <h2>7. Propiedad intelectual</h2>
          <p>
            El sitio, su diseño, textos, logotipos y el software que desarrollamos son propiedad de Cauralis
            o de sus licenciantes, salvo que un acuerdo escrito indique otra cosa. Los datos y contenidos que
            el cliente aporte siguen siendo del cliente.
          </p>
        </section>

        <section id="responsabilidad" className="space-y-4">
          <h2>8. Limitación de responsabilidad</h2>
          <p>
            En la medida que permita la ley, Cauralis no responde por pérdidas indirectas, lucro cesante o
            daños derivados de interrupciones de plataformas de terceros, de un uso indebido del servicio por
            parte del cliente o de decisiones tomadas a partir de respuestas automáticas. Nuestra
            responsabilidad total frente a un cliente se limita al monto que haya pagado por el servicio
            afectado.
          </p>
        </section>

        <section id="datos" className="space-y-4">
          <h2>9. Datos personales</h2>
          <p>
            El tratamiento de datos personales se rige por nuestra{" "}
            <Link href="/privacidad" className="text-brand underline underline-offset-4">
              Política de Privacidad
            </Link>
            , que incluye cómo pedir la eliminación de tus datos.
          </p>
        </section>

        <section id="terminacion" className="space-y-4">
          <h2>10. Terminación</h2>
          <p>
            El cliente puede dejar de usar el servicio cuando lo desee, avisándonos por escrito, sin perjuicio
            de los pagos ya devengados. Cauralis puede terminar o suspender un servicio por incumplimiento de
            estos términos o falta de pago.
          </p>
        </section>

        <section id="cambios" className="space-y-4">
          <h2>11. Cambios a estos términos</h2>
          <p>
            Podemos actualizar estos términos. La versión vigente se publicará en esta página con su fecha de
            última actualización. Seguir usando el servicio después de un cambio implica aceptarlo.
          </p>
        </section>

        <section id="ley" className="space-y-4">
          <h2>12. Ley aplicable</h2>
          <p>
            Estos términos se rigen por las leyes de la República del Ecuador. Cualquier controversia se
            intentará resolver primero de forma amistosa y, de no lograrse, ante los jueces competentes de
            Ecuador.
          </p>
        </section>

        <section id="contacto" className="space-y-4">
          <h2>13. Contacto</h2>
          <ul>
            <li>
              Correo:{" "}
              <a href={`mailto:${site.email}`} className="text-brand underline underline-offset-4">
                {site.email}
              </a>
            </li>
            <li>WhatsApp / teléfono: +593 959784469</li>
            <li>Dirección: Homero Reyes S/N, frente a Innova, La Troncal, Cañar, Ecuador</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
