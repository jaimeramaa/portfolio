import SocialLinks from "@/components/SocialLinks";
import ProjectCard from "@/components/ProjectCard";
import Flag from "@/components/Flag";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { profile, experience, projects, education, languages, profileImage, techSkills, awards, volunteering } from "@/data/portfolio";

const Index = () => {
  return (
    <div className="min-h-screen bg-ambient">
      <header className="container mx-auto px-4 py-10">
        <div className="flex items-start justify-between gap-6">
          <div className="flex items-start gap-6">
            <Avatar className="h-24 w-24">
              <AvatarImage src={profileImage} alt={profile.name} />
              <AvatarFallback>{profile.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm text-muted-foreground">{profile.role}</p>
              <div className="flex items-center gap-3 mt-1">
                <h1 className="text-3xl font-bold tracking-tight">{profile.name}</h1>
                <div className="flex gap-1">
                  {languages.map((l) => (
                    <Flag 
                      key={l.name} 
                      countryCode={l.countryCode} 
                      className="text-lg" 
                      title={`${l.name} - ${l.level}`}
                    />
                  ))}
                </div>
              </div>
              <p className="mt-3 max-w-2xl text-muted-foreground">{profile.tagline}</p>
            </div>
          </div>
          <SocialLinks />
        </div>
        
        <section className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap gap-2">
            {languages.map((l) => (
              <span key={l.name} className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm shadow-sm">
                <Flag 
                  countryCode={l.countryCode} 
                  className="text-base" 
                  title={`${l.name} - ${l.level}`}
                />
                <span className="font-medium">{l.name}</span>
                <span className="text-muted-foreground">—</span>
                <span className="text-muted-foreground">{l.level}</span>
              </span>
            ))}
          </div>
        </section>
      </header>

      <main>
        <section id="experience" className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {experience.map((exp) => (
              <article key={`${exp.company}-${exp.role}`} className="rounded-lg border border-border bg-card/50 p-5 hover-lift">
                <div className="flex items-start gap-4">
                  {exp.logo && (
                    <img 
                      src={exp.logo} 
                      alt={`${exp.company} logo`}
                      className="h-12 w-12 object-contain flex-shrink-0"
                    />
                  )}
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">{exp.role}</h3>
                      <span className="text-xs text-muted-foreground">{exp.period}</span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{exp.company}</p>
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                      {exp.points.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="awards" className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-semibold tracking-tight">Professional Development</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {awards.map((award) => (
              <article key={award.title} className="rounded-lg border border-border bg-card/50 p-5 hover-lift">
                <div className="flex items-start gap-4">
                  {award.image && (
                    <img src={award.image} alt={award.title} className="h-12 w-12 object-contain flex-shrink-0" />
                  )}
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <h3 className="text-lg font-semibold">{award.title}</h3>
                      <span className="text-xs text-muted-foreground">{award.date}</span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{award.org}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{award.details}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
          <p className="mt-1 text-sm text-muted-foreground">An appealing glance — click to learn more and view code.</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((proj) => (
              <ProjectCard key={proj.title} project={proj} />)
            )}
          </div>
        </section>

        <section id="education" className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-semibold tracking-tight">Education</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {education.map((item) => (
              <article key={item.school} className="rounded-lg border border-border bg-card/50 p-5 hover-lift">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {item.logo && (
                        <img src={item.logo} alt={item.school} className="h-8 w-8 rounded object-contain" />
                      )}
                      <div>
                        <h3 className="font-semibold">{item.school}</h3>
                        <p className="text-sm text-muted-foreground">{item.period}</p>
                      </div>
                    </div>
                    {"link" in item && item.link && (
                      <a href={item.link} target="_blank" rel="noreferrer noopener" className="text-sm text-primary hover:underline">
                        View Course →
                      </a>
                    )}
                  </div>
                  <h4 className="font-medium">{item.degree}</h4>
                  <p className="text-sm text-muted-foreground">{item.notes}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="tech-skills" className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-semibold tracking-tight">Technical Skills</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="space-y-3">
              <h3 className="text-lg font-medium">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {techSkills.languages.map((lang) => (
                  <span key={lang} className="rounded-full border border-border bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-medium">Tools & Infrastructure</h3>
              <div className="flex flex-wrap gap-2">
                {techSkills.tools.map((tool) => (
                  <span key={tool} className="rounded-full border border-border bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-medium">Web & AI</h3>
              <div className="flex flex-wrap gap-2">
                {techSkills.web.map((tech) => (
                  <span key={tech} className="rounded-full border border-border bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="volunteering" className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-semibold tracking-tight">Volunteering & Leadership</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {volunteering.map((vol) => (
              <article key={vol.title} className="rounded-lg border border-border bg-card/50 p-5 hover-lift">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{vol.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{vol.details}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{vol.period}</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60 bg-background/70">
        <div className="container mx-auto flex items-center justify-between px-4 py-8">
          <div>
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          </div>
          <SocialLinks />
        </div>
      </footer>
    </div>
  );
};

export default Index;