import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Target, Eye, Heart, Award, Users, TrendingUp, Shield, CheckCircle2, ArrowRight } from "lucide-react"

export default function SobrePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <Badge className="w-fit mx-auto">Sobre Nós</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-balance">
                Especialistas em Refrigeração Há Mais de 15 Anos
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </div>
          </div>
        </section>

        {/* Nossa História */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] lg:h-[500px]">
                <img
                  src="/professional-refrigeration-team-working.jpg"
                  alt="Equipe Alfa Climatização"
                  className="rounded-lg object-cover w-full h-full shadow-xl"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-balance">Nossa História</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                  </p>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum.
                  </p>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-6 pt-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">15+</div>
                    <div className="text-sm text-muted-foreground">Anos de Experiência</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">500+</div>
                    <div className="text-sm text-muted-foreground">Projetos Concluídos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">98%</div>
                    <div className="text-sm text-muted-foreground">Satisfação</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Missão, Visão e Valores */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Missão, Visão e Valores</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nossos princípios guiam cada decisão.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Missão */}
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">Missão</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Fornecer soluções de refrigeração com excelência técnica,
                      garantindo eficiência, segurança e sustentabilidade.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Visão */}
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Eye className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">Visão</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco. Ser referência nacional em soluções de refrigeração, reconhecida pela
                      inovação e qualidade dos serviços.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Valores */}
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">Valores</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Excelência técnica</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Compromisso com o cliente</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Sustentabilidade</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Inovação contínua</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Ética e transparência</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Equipe / Responsáveis */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Nossos Responsáveis</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Conheça os profissionais que lideram nossa
                equipe.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Responsável 1 */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="relative h-48 w-full mb-4">
                      <img
                        src="/professional-engineer-portrait.png"
                        alt="Carlos Eduardo Silva"
                        className="rounded-lg object-cover w-full h-full"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-bold mb-1">Carlos Eduardo Silva</h3>
                      <p className="text-sm text-primary font-medium mb-3">Diretor Técnico</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Engenheiro Mecânico com 20 anos de
                        experiência em refrigeração industrial.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Responsável 2 */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="relative h-48 w-full mb-4">
                      <img
                        src="/professional-manager-portrait.jpg"
                        alt="Ana Paula Rodrigues"
                        className="rounded-lg object-cover w-full h-full"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-bold mb-1">Ana Paula Rodrigues</h3>
                      <p className="text-sm text-primary font-medium mb-3">Diretora Comercial</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Especialista em gestão de projetos e
                        relacionamento com clientes.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Responsável 3 */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="relative h-48 w-full mb-4">
                      <img
                        src="/professional-technician-portrait.png"
                        alt="Roberto Almeida"
                        className="rounded-lg object-cover w-full h-full"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-bold mb-1">Roberto Almeida</h3>
                      <p className="text-sm text-primary font-medium mb-3">Gerente de Operações</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Técnico certificado com expertise em
                        manutenção e PMOC.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Por Que Somos Diferentes</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nossos diferenciais nos tornam únicos no
                mercado.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">Certificações</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Lorem ipsum dolor sit amet. Equipe certificada e qualificada com as principais certificações do
                      setor.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">Equipe Especializada</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Lorem ipsum dolor sit amet. Profissionais altamente capacitados e em constante atualização.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">Tecnologia Avançada</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Lorem ipsum dolor sit amet. Equipamentos modernos e soluções tecnológicas de ponta.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">Garantia Total</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Lorem ipsum dolor sit amet. Garantia completa em todos os serviços e instalações realizadas.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Certificados */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Certificações e Qualificações</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nossas certificações garantem qualidade e
                conformidade.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="aspect-square flex items-center justify-center">
                      <img
                        src={`/certification-badge.png?height=120&width=120&query=certification badge ${i}`}
                        alt={`Certificação ${i}`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Todas as nossas certificações estão em
                conformidade com as normas técnicas vigentes.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge variant="outline">ISO 9001</Badge>
                <Badge variant="outline">NR 13</Badge>
                <Badge variant="outline">ABNT NBR 16401</Badge>
                <Badge variant="outline">Lei 13.589/2018</Badge>
                <Badge variant="outline">PROCEL</Badge>
                <Badge variant="outline">INMETRO</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Quer Fazer Parte da Nossa História?</h2>
              <p className="text-lg text-primary-foreground/90 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Entre em contato e descubra como podemos ajudar
                seu negócio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="#contato">
                    Fale Conosco
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  asChild
                >
                  <Link href="/servicos">Nossos Serviços</Link>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Entre em Contato</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Estamos prontos para atender você.
                </p>
              </div>

              <Card>
                <CardContent className="pt-6">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="nome" className="text-sm font-medium">
                          Nome Completo
                        </label>
                        <input
                          id="nome"
                          type="text"
                          placeholder="Seu nome"
                          className="w-full px-3 py-2 border border-input rounded-md bg-background"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          E-mail
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="seu@email.com"
                          className="w-full px-3 py-2 border border-input rounded-md bg-background"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="telefone" className="text-sm font-medium">
                          Telefone
                        </label>
                        <input
                          id="telefone"
                          type="tel"
                          placeholder="(44) 1234-5678"
                          className="w-full px-3 py-2 border border-input rounded-md bg-background"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="assunto" className="text-sm font-medium">
                          Assunto
                        </label>
                        <input
                          id="assunto"
                          type="text"
                          placeholder="Assunto da mensagem"
                          className="w-full px-3 py-2 border border-input rounded-md bg-background"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="mensagem" className="text-sm font-medium">
                        Mensagem
                      </label>
                      <textarea
                        id="mensagem"
                        rows={5}
                        placeholder="Sua mensagem..."
                        className="w-full px-3 py-2 border border-input rounded-md bg-background resize-none"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Enviar Mensagem
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
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
