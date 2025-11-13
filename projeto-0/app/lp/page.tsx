import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, Phone, Mail, Clock, Award, Users, ThumbsUp } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Simplificado */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
              AC
            </div>
            <span className="font-bold text-xl text-foreground">Alfa Climatização</span>
          </Link>
          <div className="flex items-center gap-4">
            <a
              href="tel:4433334444"
              className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">(44) 3333-4444</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section com Formulário */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Conteúdo */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-accent/10 text-accent-foreground rounded-full text-sm font-semibold">
                ✓ Atendimento em Maringá e Região
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Climatização Profissional para Seu Negócio
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground text-pretty">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Instalação, manutenção e PMOC com equipe
                especializada e certificada.
              </p>

              {/* Benefícios Rápidos */}
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Atendimento 24h</p>
                    <p className="text-sm text-muted-foreground">Emergências e manutenções</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Equipe Certificada</p>
                    <p className="text-sm text-muted-foreground">Profissionais qualificados</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Garantia Total</p>
                    <p className="text-sm text-muted-foreground">Serviços garantidos</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Orçamento Grátis</p>
                    <p className="text-sm text-muted-foreground">Sem compromisso</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulário em Destaque */}
            <Card className="shadow-2xl border-2">
              <CardContent className="p-6 md:p-8">
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">Solicite um Orçamento</h2>
                    <p className="text-muted-foreground">Preencha o formulário e receba uma proposta personalizada</p>
                  </div>

                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="nome">Nome Completo *</Label>
                      <Input id="nome" placeholder="Seu nome completo" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="empresa">Empresa</Label>
                      <Input id="empresa" placeholder="Nome da sua empresa" />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="telefone">Telefone *</Label>
                        <Input id="telefone" type="tel" placeholder="(44) 99999-9999" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">E-mail *</Label>
                        <Input id="email" type="email" placeholder="seu@email.com" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="servico">Serviço de Interesse</Label>
                      <select
                        id="servico"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <option value="">Selecione um serviço</option>
                        <option value="instalacao">Instalação de Ar Condicionado</option>
                        <option value="manutencao">Manutenção Preventiva</option>
                        <option value="pmoc">PMOC - Plano de Manutenção</option>
                        <option value="refrigeracao">Refrigeração Industrial</option>
                        <option value="emergencia">Atendimento de Emergência</option>
                        <option value="outro">Outro Serviço</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mensagem">Mensagem</Label>
                      <Textarea id="mensagem" placeholder="Descreva suas necessidades..." rows={4} />
                    </div>

                    <Button type="submit" size="lg" className="w-full text-lg">
                      Solicitar Orçamento Grátis
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      Ao enviar, você concorda em receber contato da Alfa Climatização
                    </p>
                  </form>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Números e Credibilidade */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-sm md:text-base opacity-90">Anos de Experiência</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">2.500+</div>
              <div className="text-sm md:text-base opacity-90">Clientes Atendidos</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-sm md:text-base opacity-90">Satisfação</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-sm md:text-base opacity-90">Suporte Disponível</div>
            </div>
          </div>
        </div>
      </section>

      {/* Por Que Escolher */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Por Que Escolher a Alfa Climatização?
            </h2>
            <p className="text-lg text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Certificações e Qualidade</h3>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Equipe certificada e treinada constantemente.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <Clock className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Atendimento Rápido</h3>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Atendemos emergências 24 horas por dia.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Equipe Especializada</h3>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Profissionais experientes e dedicados.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">O Que Nossos Clientes Dizem</h2>
            <p className="text-lg text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <ThumbsUp key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua."
                </p>
                <div>
                  <p className="font-semibold text-foreground">João Silva</p>
                  <p className="text-sm text-muted-foreground">Gerente de Facilities - Empresa XYZ</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <ThumbsUp key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco."
                </p>
                <div>
                  <p className="font-semibold text-foreground">Maria Santos</p>
                  <p className="text-sm text-muted-foreground">Proprietária - Restaurante ABC</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <ThumbsUp key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in
                  voluptate velit."
                </p>
                <div>
                  <p className="font-semibold text-foreground">Carlos Oliveira</p>
                  <p className="text-sm text-muted-foreground">Diretor - Indústria DEF</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-accent text-primary-foreground">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
              Pronto Para Ter o Melhor em Climatização?
            </h2>
            <p className="text-lg md:text-xl opacity-90 text-pretty">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Entre em contato agora e receba um orçamento
              personalizado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" variant="secondary" className="text-lg" asChild>
                <a href="tel:4433334444">
                  <Phone className="mr-2 h-5 w-5" />
                  (44) 3333-4444
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <a href="#topo">Solicitar Orçamento</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Simplificado */}
      <footer className="border-t bg-muted/30 py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
                AC
              </div>
              <span className="font-bold text-lg text-foreground">Alfa Climatização</span>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <a href="tel:4433334444" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Phone className="h-4 w-4" />
                (44) 3333-4444
              </a>
              <a
                href="mailto:contato@alfaclimatizacao.com.br"
                className="flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                contato@alfaclimatizacao.com.br
              </a>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Alfa Climatização. Todos os direitos reservados. | Maringá - PR</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
