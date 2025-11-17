import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Snowflake,
  Shield,
  Clock,
  Award,
  CheckCircle2,
  ArrowRight,
  Star,
  Wrench,
  FileCheck,
  Building2,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge className="w-fit">Especialistas em Ar Condicionado</Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                  Serviços Técnicos de Ar-Condicionado
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Instalação, manutenção, reparo e elaboração de PMOC com equipe especializada. Mais conforto, eficiência energética e ar puro para sua casa ou empresa.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <a href="https://api.whatsapp.com/send?phone=5544991111996" target="_blank" rel="noopener noreferrer">
                      Solicitar Orçamento
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/servicos">Nossos Serviços</Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] lg:h-[500px]">
                <img
                  src="/industrial-refrigeration-system-with-pipes-and-equ.jpg"
                  alt="Sistema de refrigeração industrial"
                  className="rounded-lg object-cover w-full h-full shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                Por Que Escolher Nossos Serviços de Ar Condicionado?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Qualidade e confiança em cada instalação e manutenção de ar condicionado.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">Segurança Garantida</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Ar condicionado instalado com segurança e garantia total para sua família.
                    </p>
                  </div>
                </CardContent>
              </Card>


              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">Certificações</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Profissionais especializados e certificados em ar condicionado.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">Garantia Total</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Cobertura total em todos os serviços de ar condicionado.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* PMOC Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px]">
                <img
                  src="/technician-inspecting-air-conditioning-maintenance.jpg"
                  alt="PMOC - Plano de Manutenção"
                  className="rounded-lg object-cover w-full h-full shadow-xl"
                />
              </div>
              <div className="space-y-6">
                <Badge variant="outline" className="w-fit">
                  PMOC
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-balance">
                  Plano de Manutenção, Operação e Controle (PMOC)
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Garanta o funcionamento ideal do seu ar-condicionado, evite multas e mantenha um ambiente saudável com ar puro e mais economia de energia.
                </p>
                <p className="text-muted-foreground font-semibold mb-4">
                  Com o PMOC você garante:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Conformidade legal e zero risco de multas
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Redução de custos com manutenções corretivas
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Maior vida útil dos equipamentos
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Ambientes mais saudáveis, com qualidade do ar garantida
                    </span>
                  </li>
                </ul>
                <Button asChild>
                  <Link href="/servicos">
                    Saiba Mais Sobre PMOC
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Serviços em Destaque */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Nossos Serviços de Ar Condicionado</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Soluções completas para instalação e manutenção de ar condicionado residencial e comercial.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Snowflake className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">Instalação de Ar Condicionado</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Instalação profissional garantindo máximo desempenho do seu ar condicionado.
                    </p>
                    <Button variant="link" className="p-0 h-auto" asChild>
                      <Link href="/servicos">
                        Ver detalhes
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Wrench className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">Manutenção de Ar Condicionado</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Manutenção preventiva para ar condicionado sempre funcionando perfeitamente.
                    </p>
                    <Button variant="link" className="p-0 h-auto" asChild>
                      <Link href="/servicos">
                        Ver detalhes
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <FileCheck className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">PMOC</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Plano completo que mantém ar condicionado em perfeitas condições e evita multas.
                    </p>
                    <Button variant="link" className="p-0 h-auto" asChild>
                      <Link href="/servicos">
                        Ver detalhes
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Building2 className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">Infraestrutura para Ar Condicionado</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Projetos completos de infraestrutura para sistemas de ar condicionado eficientes.
                    </p>
                    <Button variant="link" className="p-0 h-auto" asChild>
                      <Link href="/servicos">
                        Ver detalhes
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Button size="lg" variant="outline" asChild>
                <Link href="/servicos">
                  Ver Todos os Serviços
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">O Que Nossos Clientes Dizem Sobre Nosso Ar Condicionado</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Veja como nossos serviços de ar condicionado transformaram o conforto dos nossos clientes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      "O ar condicionado que instalaram na minha casa funciona perfeitamente. O ambiente fica fresco no verão e confortável no inverno. Recomendo a Alfa Climatização!"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-sm font-semibold text-primary">MC</span>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">Maria Clara</p>
                        <p className="text-xs text-muted-foreground">Dona de Casa</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      "A manutenção preventiva do ar condicionado da empresa reduziu nossos custos de energia em 30%. Serviço excelente!"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-sm font-semibold text-primary">JS</span>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">João Silva</p>
                        <p className="text-xs text-muted-foreground">Empresário</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      "Repararam meu ar condicionado em poucas horas. Atendimento rápido e preço justo. Voltarei sempre!"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-sm font-semibold text-primary">AC</span>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">Ana Costa</p>
                        <p className="text-xs text-muted-foreground">Professora</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Problemas no Ar-Condicionado?</h2>
              <p className="text-lg text-primary-foreground/90 leading-relaxed">
                Chame nossa equipe e receba um orçamento na hora.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <a href="https://api.whatsapp.com/send?phone=5544991111996" target="_blank" rel="noopener noreferrer">
                    Solicitar Orçamento
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  asChild
                >
                  <Link href="/servicos">Ver Serviços de Ar Condicionado</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Fale Conosco Sobre seu Ar Condicionado</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Entre em contato diretamente pelo WhatsApp para atendimento rápido sobre ar condicionado.
                </p>
              </div>

              <Card>
                <CardContent className="pt-6">
                  <div className="text-center space-y-6">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold">Fale Conosco pelo WhatsApp</h3>
                    <p className="text-muted-foreground">
                      Clique no botão abaixo para iniciar uma conversa sobre ar condicionado diretamente no WhatsApp
                    </p>
                    <Button size="lg" className="w-full bg-green-500 hover:bg-green-600" asChild>
                      <a href="https://api.whatsapp.com/send?phone=5544991111996" target="_blank" rel="noopener noreferrer">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                        </svg>
                        Conversar no WhatsApp Sobre Ar Condicionado
                      </a>
                    </Button>
                    <p className="text-sm text-muted-foreground">
                      Atendimento rápido • Orçamento gratuito • Especialistas em ar condicionado
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
