export const home = {
  es: {
    hero: {
      label: 'GENESIS',
      title: 'Optimizando tu futuro con tecnología',
      description:
        'Diseñamos biótopos digitales donde la fluidez cognitiva y el alto rendimiento convergen en ecosistemas vivos de software.',
      cta: 'Iniciar Consulta',
    },
    ecosystem: {
      label: 'ECOSYSTEM SERVICES',
      title: 'Servicios de Adaptación Cognitiva',
      description:
        'Arquitecturas diseñadas para evolucionar con la complejidad de su organización.',
      fullstack: {
        title: 'Full Stack',
        description: 'Desarrollo integral de interfaces simbióticas y arquitecturas resilientes.',
      },
      backend: {
        title: 'Backend APIs',
        description: 'Sistemas nerviosos centrales robustos y escalables.',
      },
      data: {
        title: 'Data Engineering',
        description: 'Tratamiento de flujos de datos como recursos naturales críticos.',
      },
      ai: {
        title: 'AI / Automation',
        description:
          'Inteligencia artificial integrada para optimizar el flujo de trabajo biológico-digital.',
      },
      integration: { title: 'System Integration' },
      maintenance: { title: 'Maintenance' },
    },
    philosophy: {
      label: 'PHILOSOPHY',
      title: 'Biótopo Digital',
      p1: 'Nuestra metodología core se basa en la creación de entornos digitales que se comportan como organismos vivos. No construimos interfaces estáticas; diseñamos flujos dinámicos que se adaptan a la carga cognitiva del usuario.',
      p2: 'En COFOL, creemos que la tecnología debe ser invisible, permitiendo que la creatividad humana florezca en un entorno de mínima fricción y máxima resonancia técnica.',
      bullet1: 'Arquitectura Evolutiva',
      bullet2: 'Resonancia Cognitiva',
      bullet3: 'Simbiosis Algorítmica',
      quote:
        '"El software no debe ser una herramienta, sino un hábitat que respira con el usuario."',
      image: { alt: 'Representación visual del biótopo digital' },
    },
    contact: {
      label: 'CONTACT',
      title: 'Hablemos de tu Biótopo',
      description:
        'Cada gran evolución comienza con un solo impulso. Estamos listos para escuchar los retos de tu organización y diseñar la arquitectura que potencie tu visión.',
      email: { label: 'Email' },
      location: { label: 'Ubicación', value: 'Remote First / Operaciones Globales' },
    },
    form: {
      name: {
        label: 'Nombre Completo',
        placeholder: 'John Doe',
        required: 'El nombre es requerido',
        min: 'El nombre debe tener al menos 2 caracteres',
        max: 'El nombre es demasiado largo',
      },
      email: {
        label: 'Email',
        placeholder: 'john@company.com',
        invalid: 'Ingresa un correo electrónico válido',
      },
      message: {
        label: 'Mensaje',
        placeholder: '¿Cómo podemos optimizar tu flujo de trabajo?',
        required: 'El mensaje es requerido',
        min: 'El mensaje debe tener al menos 10 caracteres',
        max: 'El mensaje es demasiado largo',
      },
      submit: 'Enviar Consulta',
      success: {
        title: '¡Mensaje enviado!',
        body: 'Gracias por contactarnos. Nos pondremos en contacto contigo pronto.',
        reset: 'Enviar otro mensaje',
      },
      error: {
        ratelimit: 'Has alcanzado el límite de envíos. Por favor, inténtalo de nuevo en 5 minutos.',
        server: 'Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.',
      },
    },
  },
  en: {
    hero: {
      label: 'GENESIS',
      title: 'Optimizing your future with technology',
      description:
        'We design digital biotopes where cognitive fluency and high performance converge into living software ecosystems.',
      cta: 'Start a Consultation',
    },
    ecosystem: {
      label: 'ECOSYSTEM SERVICES',
      title: 'Cognitive Adaptation Services',
      description: 'Architectures designed to evolve with the complexity of your organization.',
      fullstack: {
        title: 'Full Stack',
        description:
          'Comprehensive development of symbiotic interfaces and resilient architectures.',
      },
      backend: {
        title: 'Backend APIs',
        description: 'Robust and scalable central nervous systems.',
      },
      data: {
        title: 'Data Engineering',
        description: 'Treating data flows as critical natural resources.',
      },
      ai: {
        title: 'AI / Automation',
        description: 'Integrated artificial intelligence to optimize biological-digital workflow.',
      },
      integration: { title: 'System Integration' },
      maintenance: { title: 'Maintenance' },
    },
    philosophy: {
      label: 'PHILOSOPHY',
      title: 'Digital Biotope',
      p1: "Our core methodology is based on creating digital environments that behave like living organisms. We don't build static interfaces; we design dynamic flows that adapt to the user's cognitive load.",
      p2: 'At COFOL, we believe technology should be invisible, allowing human creativity to flourish in an environment of minimal friction and maximum technical resonance.',
      bullet1: 'Evolutionary Architecture',
      bullet2: 'Cognitive Resonance',
      bullet3: 'Algorithmic Symbiosis',
      quote: '"Software should not be a tool, but a habitat that breathes with the user."',
      image: { alt: 'Visual representation of the digital biotope' },
    },
    contact: {
      label: 'CONTACT',
      title: "Let's talk about your Biotope",
      description:
        "Every great evolution begins with a single impulse. We're ready to listen to your organization's challenges and design the architecture that empowers your vision.",
      email: { label: 'Email' },
      location: { label: 'Location', value: 'Remote First / Global Operations' },
    },
    form: {
      name: {
        label: 'Full Name',
        placeholder: 'John Doe',
        required: 'Name is required',
        min: 'Name must be at least 2 characters',
        max: 'Name is too long',
      },
      email: {
        label: 'Email',
        placeholder: 'john@company.com',
        invalid: 'Please enter a valid email address',
      },
      message: {
        label: 'Message',
        placeholder: 'How can we optimize your workflow?',
        required: 'Message is required',
        min: 'Message must be at least 10 characters',
        max: 'Message is too long',
      },
      submit: 'Send Inquiry',
      success: {
        title: 'Message sent!',
        body: "Thank you for contacting us. We'll get back to you soon.",
        reset: 'Send another message',
      },
      error: {
        ratelimit: 'You have reached the submission limit. Please try again in 5 minutes.',
        server: 'There was an error sending your message. Please try again later.',
      },
    },
  },
} as const;
