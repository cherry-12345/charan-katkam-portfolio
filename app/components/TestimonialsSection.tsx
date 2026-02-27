'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Professor / Mentor Name',
    role: 'Professor, G. Pullaiah College of Engineering and Technology',
    quote:
      'Charan demonstrated exceptional initiative in building SmartSDLC - a production-quality AI tool rare for an undergraduate student.',
    avatar: '/avatars/mentor.png',
  },
  {
    name: 'Project Collaborator',
    role: 'Team Member, SmartSDLC Capstone',
    quote:
      'He consistently turned rough ideas into structured modules with measurable outcomes and reliable demos.',
    avatar: '/avatars/collaborator.png',
  },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 md:py-28 bg-[color:var(--color-bg)]">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-medium text-[color:var(--color-text)] mb-4 tracking-tight">
            What People Say
          </h2>
          <div className="w-24 h-1 bg-[color:var(--color-accent)] mx-auto mb-6"></div>
          <p className="text-lg text-[color:var(--color-muted)] max-w-3xl mx-auto">
            Feedback and recommendation signals that reinforce project quality and execution strength.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="studio-surface rounded-2xl p-6 border border-[color:var(--color-border)] shadow-lg"
            >
              <p className="text-[color:var(--color-muted)] italic mb-4 leading-relaxed">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="flex items-center gap-3">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-[color:var(--color-text)]">{testimonial.name}</p>
                  <p className="text-sm text-[color:var(--color-muted)]">{testimonial.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
