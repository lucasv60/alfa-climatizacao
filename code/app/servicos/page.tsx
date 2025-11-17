import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Snowflake,
  Wrench,
  FileCheck,
  Building2,
  Thermometer,
  Wind,
  Zap,
  ClipboardCheck,
  CheckCircle2,
  ArrowRight,
  Settings,
  ShieldCheck,
  Gauge,
} from "lucide-react"

export default function ServicosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <Badge className="w-fit mx-auto">Nossos Serviços</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-balance">Serviços Completos de Ar Condicionado</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Instalação, manutenção e reparo profissional de ar condicionado. Conforto térmico garantido com qualidade e eficiência energética.
              </p>
            </div>
          </div>
        </section>

        {/* Serviços Principais */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Instalação */}
              <Card className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Snowflake className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-2">Instalação de Ar Condicionado</CardTitle>
                      <p className="text-sm text-muted-foreground font-normal">
                        Instalação profissional com garantia completa
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Instalação completa e profissional de sistemas de ar condicionado. Garantimos máximo desempenho, eficiência energética e durabilidade para seu conforto térmico.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Ar condicionado split residencial e comercial</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Sistemas centrais de climatização</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Ventilação e exaustão industrial</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Chillers e sistemas de resfriamento</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <Link href="#contato">
                      Solicitar Orçamento
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    Precisa instalar ar condicionado? Fale Agora no WhatsApp e solicite um orçamento sem compromisso!
                  </p>
                </CardContent>
              </Card>

              {/* Manutenção */}
              <Card className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Wrench className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-2">Manutenção de Ar Condicionado</CardTitle>
                      <p className="text-sm text-muted-foreground font-normal">
                        Preventiva e corretiva com garantia total
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Manutenção completa do seu ar condicionado para garantir funcionamento perfeito, economia de energia e prolongar a vida útil do equipamento.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Manutenção preventiva programada</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Atendimento emergencial 24/7</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Limpeza e higienização completa</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Troca de peças e componentes</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <Link href="#contato">
                      Solicitar Orçamento
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    Seu ar condicionado precisa de manutenção? Fale Agora no WhatsApp e agende seu serviço!
                  </p>
                </CardContent>
              </Card>

              {/* PMOC */}
              <Card className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <FileCheck className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-2">PMOC - Plano de Manutenção</CardTitle>
                      <p className="text-sm text-muted-foreground font-normal">
                        Evite multas e garanta qualidade do ar
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Plano completo de manutenção que garante conformidade legal, evita multas e mantém seus sistemas de ar condicionado sempre em perfeitas condições.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Conformidade com legislação ambiental</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Análise completa da qualidade do ar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Relatórios detalhados e documentação</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Acompanhamento contínuo e suporte</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <Link href="#contato">
                      Solicitar Orçamento
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    Precisa de PMOC para seu negócio? Fale Agora no WhatsApp e evite multas!
                  </p>
                </CardContent>
              </Card>

              {/* Infraestrutura */}
              <Card className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Building2 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-2">Infraestrutura para Ar Condicionado</CardTitle>
                      <p className="text-sm text-muted-foreground font-normal">
                        Projetos completos e adequação de ambientes
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Projetos completos de infraestrutura para sistemas de ar condicionado eficientes. Adequamos ambientes e instalamos toda a estrutura necessária para seu conforto térmico.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Projetos elétricos e hidráulicos completos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Dimensionamento correto dos sistemas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Adequação completa de ambientes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Consultoria técnica especializada</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <a href="https://api.whatsapp.com/send?phone=5544991111996" target="_blank" rel="noopener noreferrer">
                      Solicitar Orçamento
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    Precisa de infraestrutura para ar condicionado? Fale Agora no WhatsApp e receba consultoria gratuita!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Serviços Adicionais */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Serviços Complementares de Ar Condicionado</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Serviços especializados complementares para otimizar seu sistema de ar condicionado e garantir máxima eficiência.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Thermometer className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">Análise Térmica</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Análise completa da eficiência térmica do seu ar condicionado para identificar oportunidades de economia.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Wind className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">Qualidade do Ar</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Monitoramento e análise da qualidade do ar para ambientes mais saudáveis e produtivos.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">Eficiência Energética</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Otimização do consumo energético do seu ar condicionado, reduzindo custos e impacto ambiental.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <ClipboardCheck className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">Laudos Técnicos</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Documentação técnica completa para conformidade legal e garantia de qualidade dos serviços.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Settings className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">Retrofit</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Modernização de sistemas antigos de ar condicionado com tecnologia atual e maior eficiência.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <ShieldCheck className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">Certificações</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Suporte completo para obtenção de certificações técnicas e conformidade com normas vigentes.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Gauge className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">Monitoramento</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Monitoramento remoto 24/7 do seu sistema de ar condicionado para prevenir problemas.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Building2 className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">Consultoria</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Consultoria técnica especializada para projetos de ar condicionado e soluções personalizadas.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-8">
              <p className="text-sm text-muted-foreground">
                Precisa de algum serviço complementar para seu ar condicionado? Fale Agora no WhatsApp!
              </p>
            </div>
          </div>
        </section>

        {/* Processo de Trabalho */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Como Trabalhamos com Ar Condicionado</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Processo profissional que garante qualidade e eficiência em todos os serviços de ar condicionado.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center space-y-4">
                <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-semibold text-lg">Diagnóstico</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Análise completa das necessidades do seu ar condicionado e ambiente.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-semibold text-lg">Planejamento</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Projeto detalhado e orçamento personalizado para seu ar condicionado.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="font-semibold text-lg">Execução</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Implementação profissional com garantia de qualidade no ar condicionado.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="font-semibold text-lg">Acompanhamento</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Suporte contínuo e manutenção preventiva do seu ar condicionado.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Precisa de Serviços de Ar Condicionado?</h2>
              <p className="text-lg text-primary-foreground/90 leading-relaxed">
                Entre em contato e receba um orçamento personalizado para seus serviços de ar condicionado.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <a href="https://api.whatsapp.com/send?phone=5544991111996" target="_blank" rel="noopener noreferrer">
                  Solicitar Orçamento Agora
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Solicite um Orçamento para Ar Condicionado</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Entre em contato diretamente pelo WhatsApp para atendimento rápido sobre serviços de ar condicionado.
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
                      Clique no botão abaixo para iniciar uma conversa sobre serviços de ar condicionado diretamente no WhatsApp
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