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
                Sobre Nós
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A Alfa Climatização é uma empresa dedicada a oferecer soluções completas em refrigeração e ar-condicionado, prezando sempre pela qualidade, segurança e eficiência. Nossa equipe é composta por técnicos e especialistas altamente capacitados, com ampla experiência no setor e compromisso absoluto com a excelência.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Combinamos conhecimento técnico, atendimento humanizado e as melhores práticas do mercado para entregar projetos confiáveis, seja para residências, empresas ou indústrias. Nosso objetivo é garantir conforto térmico, desempenho superior e total tranquilidade em cada serviço realizado.
              </p>
            </div>
          </div>
        </section>

        {/* Nossa História */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] lg:h-[500px]">
                <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                  <img
                    src="/logo-alfa-climatizacao.png"
                    alt="Alfa Climatização Logo"
                    className="h-16 w-auto"
                  />
                </div>
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
                    A Alfa Climatização surgiu com o propósito de elevar o padrão dos serviços de climatização, oferecendo um atendimento profissional, transparente e realmente alinhado às necessidades de cada cliente.
                  </p>
                  <p>
                    Desde o início, consolidamos uma equipe altamente qualificada, especializada em instalações, manutenções e projetos de refrigeração e ar-condicionado. Ao longo do tempo, ampliamos nossa atuação e passamos a atender residências, comércios e empresas que buscavam eficiência, agilidade e excelência técnica.
                  </p>
                  <p>
                    Com processos estruturados, rigor no cumprimento de prazos e foco na qualidade do ar e na eficiência energética, construímos uma trajetória marcada pela confiança, pelos resultados e pela satisfação dos nossos clientes.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-6 pt-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">6+ anos</div>
                    <div className="text-sm text-muted-foreground">de experiência somada da equipe técnica</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">500+</div>
                    <div className="text-sm text-muted-foreground">serviços realizados em instalação, manutenção e PMOC</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">98%</div>
                    <div className="text-sm text-muted-foreground">de aprovação dos clientes atendidos</div>
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
                Nossos princípios fundamentais guiam cada decisão e ação da Alfa Climatização.
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
                      Oferecer soluções completas em climatização com excelência técnica, garantindo conforto, segurança, qualidade do ar e eficiência energética para nossos clientes.
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
                      Ser referência regional em serviços de climatização, reconhecida pela qualidade, confiabilidade e modernização constante dos nossos processos.
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
                        <span className="text-sm text-muted-foreground">Sustentabilidade e eficiência energética</span>
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


        {/* Diferenciais */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Por Que Somos Diferentes</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Construímos nossa reputação oferecendo atendimento de qualidade, soluções eficientes e total compromisso com o cliente. Nossos diferenciais refletem a seriedade e a dedicação que colocamos em cada projeto.
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
                      Nossa equipe possui certificações reconhecidas no setor, garantindo que cada serviço seja executado com segurança, precisão e dentro dos mais altos padrões técnicos.
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
                      Contamos com profissionais experientes, constantemente atualizados e preparados para oferecer o melhor em climatização e refrigeração.
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
                      Utilizamos equipamentos modernos e tecnologias de ponta para entregar resultados mais rápidos, eficientes e duradouros.
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
                      Oferecemos garantia completa em todos os serviços e instalações, reforçando nosso compromisso com a qualidade e a satisfação dos nossos clientes.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

       {/* Nossa Equipe Técnica */}
       <section className="py-16 md:py-24">
         <div className="container mx-auto px-4">
           <div className="text-center mb-12">
             <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Nossa Equipe Técnica</h2>
             <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
               Conheça os profissionais que fazem a diferença na Alfa Climatização.
             </p>
           </div>
           <div className="flex justify-center">
             <Card className="max-w-sm">
               <CardContent className="pt-6">
                 <div className="flex flex-col items-center text-center space-y-4">
                   <img
                     src="/tecnico-vinicius.jpg"
                     alt="Vinicius Abreu"
                     className="w-32 h-32 rounded-full object-cover"
                   />
                   <div>
                     <h3 className="text-xl font-semibold">Vinicius Abreu</h3>
                     <p className="text-sm text-muted-foreground">Técnico Responsável</p>
                     <p className="text-sm text-muted-foreground">CFT: 07313611994</p>
                   </div>
                   <p className="text-sm text-muted-foreground leading-relaxed">
                     Especialista em climatização com anos de experiência, garantindo serviços de alta qualidade e eficiência.
                   </p>
                 </div>
               </CardContent>
             </Card>
           </div>
         </div>
       </section>

       {/* Contato */}
        <section id="contato" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Entre em Contato</h2>
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
                      Clique no botão abaixo para iniciar uma conversa diretamente no WhatsApp
                    </p>
                    <Button size="lg" className="w-full bg-green-500 hover:bg-green-600" asChild>
                      <a href="https://api.whatsapp.com/send?phone=5544991111996&text=Ol%C3%A1%21%20Estou%20entrando%20em%20contato%20com%20voc%C3%AAs%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.%20" target="_blank" rel="noopener noreferrer">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                        </svg>
                        Iniciar Conversa no WhatsApp
                      </a>
                    </Button>
                    <p className="text-sm text-muted-foreground">
                      Atendimento rápido • Orçamento gratuito
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
