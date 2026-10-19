import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Cómo Cauralis recopila, usa, comparte y protege los datos personales de quienes nos escriben por WhatsApp o Messenger.",
  alternates: { canonical: "/privacidad" },
};

const ultimaActualizacion = "19 de octubre de 2026";

export default function PrivacidadPage() {
  return (
    <div className="mx-auto max-w-[760px] px-5 pb-24 pt-32 sm:px-6 lg:pt-40">
      <p className="eyebrow">Legal</p>
      <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
        Política de Privacidad
      </h1>
      <p className="mt-5 text-sm text-subtle">Última actualización: {ultimaActualizacion}</p>

      <div className="mt-12 space-y-12 leading-relaxed text-muted-foreground [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-foreground [&_li]:ml-5 [&_li]:list-disc [&_strong]:text-foreground [&_ul]:mt-4 [&_ul]:space-y-2">
        <p>
          Esta política explica qué datos personales recopila <strong>Cauralis</strong> cuando una persona
          se comunica con nosotros por WhatsApp o Messenger, para qué los usamos, con quién los compartimos y
          cómo puede ejercer sus derechos. Al usar nuestros servicios de mensajería, aceptas lo descrito aquí.
        </p>

        <section id="responsable" className="space-y-4">
          <h2>1. Quiénes somos y datos del responsable</h2>
          <p>
            El responsable del tratamiento de los datos es <strong>Villamar Zaruma Kerly Michelle</strong>, que
            opera comercialmente bajo el nombre <strong>Cauralis</strong>, empresa de desarrollo de software
            dedicada a chatbots y automatización de mensajería.
          </p>
          <ul>
            <li>Dirección: Homero Reyes S/N, frente a Innova, La Troncal, Cañar, Ecuador.</li>
            <li>Correo: {site.email}</li>
            <li>WhatsApp / teléfono: +593 959784469</li>
          </ul>
        </section>

        <section id="datos" className="space-y-4">
          <h2>2. Datos que recopilamos</h2>
          <p>
            Cuando una persona escribe a nuestros números de WhatsApp o a nuestra página de Messenger,
            podemos tratar:
          </p>
          <ul>
            <li>Número de teléfono (en WhatsApp) o nombre de perfil (en Messenger).</li>
            <li>Identificador de usuario asignado por Meta Platforms.</li>
            <li>Contenido de los mensajes que la persona envía y de las respuestas que recibe.</li>
            <li>Fecha y hora de cada mensaje.</li>
            <li>Archivos, imágenes, audios o documentos que la persona envíe voluntariamente.</li>
          </ul>
          <p>
            No solicitamos datos sensibles (por ejemplo, de salud, creencias religiosas o datos financieros
            de tarjetas). Le pedimos que no los incluya en sus mensajes.
          </p>
        </section>

        <section id="finalidades" className="space-y-4">
          <h2>3. Para qué usamos los datos</h2>
          <ul>
            <li>Responder consultas y dar atención al cliente.</li>
            <li>Agendar citas o reuniones cuando la persona lo solicite.</li>
            <li>Enviar la información o la propuesta que la persona pidió.</li>
            <li>Mejorar la calidad de nuestros servicios y de las respuestas automáticas.</li>
            <li>Cumplir obligaciones legales y atender requerimientos de autoridades competentes.</li>
          </ul>
        </section>

        <section id="base-legal" className="space-y-4">
          <h2>4. Base legal y consentimiento</h2>
          <p>
            El tratamiento de sus datos se basa en su consentimiento. Usted inicia la conversación por WhatsApp
            o Messenger, y al usar nuestros servicios acepta esta política. Si no está de acuerdo, puede dejar
            de escribirnos en cualquier momento.
          </p>
          <p>
            Este tratamiento se realiza conforme a la <strong>Ley Orgánica de Protección de Datos Personales</strong>{" "}
            de Ecuador y su normativa de desarrollo.
          </p>
        </section>

        <section id="comparticion" className="space-y-4">
          <h2>5. Con quién compartimos los datos</h2>
          <ul>
            <li>
              <strong>Meta Platforms, Inc.</strong>, a través de WhatsApp Business Platform y Messenger. Los
              mensajes se transmiten por estas plataformas y se rigen por sus propios términos y políticas de
              privacidad.
            </li>
            <li>
              <strong>Proveedores de infraestructura</strong> necesarios para operar el servicio, como alojamiento,
              base de datos y envío de correos, que tratan los datos solo para prestarnos el servicio.
            </li>
          </ul>
          <p>
            <strong>No vendemos datos personales</strong> ni los compartimos con terceros para fines publicitarios.
          </p>
        </section>

        <section id="conservacion" className="space-y-4">
          <h2>6. Conservación de los datos</h2>
          <p>
            Conservamos los mensajes y datos asociados durante <strong>12 meses</strong> desde la última
            interacción, salvo que una obligación legal exija un plazo distinto. Pasado ese plazo, los datos se
            eliminan o se anonimizan.
          </p>
        </section>

        <section id="seguridad" className="space-y-4">
          <h2>7. Seguridad de la información</h2>
          <p>
            Aplicamos medidas técnicas y organizativas razonables para proteger los datos contra acceso no
            autorizado, pérdida o alteración, como el acceso restringido a los sistemas, el uso de conexiones
            cifradas (HTTPS) y el control de quién puede ver la información. Ningún sistema es completamente
            seguro, por lo que no podemos garantizar una protección absoluta.
          </p>
        </section>

        <section id="derechos" className="space-y-4">
          <h2>8. Derechos del titular</h2>
          <p>Como titular de los datos, usted puede solicitar:</p>
          <ul>
            <li><strong>Acceso:</strong> conocer qué datos suyos tratamos.</li>
            <li><strong>Rectificación:</strong> corregir datos inexactos o incompletos.</li>
            <li><strong>Eliminación:</strong> pedir que borremos sus datos.</li>
            <li><strong>Oposición:</strong> oponerse a determinados tratamientos.</li>
            <li><strong>Portabilidad:</strong> recibir sus datos en un formato estructurado y de uso común.</li>
          </ul>
          <p>
            Para ejercer cualquiera de estos derechos, escríbanos a{" "}
            <a href={`mailto:${site.email}`} className="text-brand underline underline-offset-4">
              {site.email}
            </a>
            . Responderemos en un plazo razonable y le indicaremos los pasos a seguir.
          </p>
        </section>

        <section id="eliminacion" className="space-y-4">
          <h2>9. Eliminación de datos</h2>
          <p>Para pedir que borremos sus datos personales, puede hacerlo de dos formas:</p>
          <ul>
            <li>
              Envíe un correo a{" "}
              <a href={`mailto:${site.email}`} className="text-brand underline underline-offset-4">
                {site.email}
              </a>{" "}
              indicando el número de WhatsApp o el nombre de perfil de Messenger con el que nos escribió.
            </li>
            <li>
              Escriba <strong>«eliminar mis datos»</strong> al asistente virtual de WhatsApp.
            </li>
          </ul>
          <p>
            Confirmaremos la solicitud cuando la hayamos procesado. Podemos conservar únicamente la información
            que la ley nos obligue a mantener.
          </p>
        </section>

        <section id="menores" className="space-y-4">
          <h2>10. Menores de edad</h2>
          <p>
            Nuestros servicios no están dirigidos a menores de 18 años. Si detectamos que hemos recibido datos de
            un menor sin la autorización correspondiente, los eliminaremos.
          </p>
        </section>

        <section id="cambios" className="space-y-4">
          <h2>11. Cambios a esta política</h2>
          <p>
            Podemos actualizar esta política para reflejar cambios en nuestros servicios o en la normativa. La
            versión vigente se publicará en esta misma página y indicará la fecha de última actualización.
          </p>
        </section>

        <section id="contacto" className="space-y-4">
          <h2>12. Contacto para consultas sobre privacidad</h2>
          <ul>
            <li>Responsable: Villamar Zaruma Kerly Michelle (Cauralis)</li>
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
