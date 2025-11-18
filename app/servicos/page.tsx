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
              <h1 className="text-4xl md:text-5xl font-bold text-balance">Serviços Técnicos de Ar-Condicionado</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Instalação, manutenção, reparo e elaboração de PMOC com equipe especializada. Conforto térmico garantido para sua casa ou empresa.
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
                      <CardTitle className="text-2xl mb-2">Instalações Residenciais e Comerciais</CardTitle>
                      <p className="text-sm text-muted-foreground font-normal">
                        Trabalhando com a instalação profissional dos principais tipos de ar-condicionado
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Trabalhamos com a instalação profissional dos principais tipos de ar-condicionado, garantindo segurança, eficiência e o melhor desempenho para seu ambiente.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Ar-condicionado Split</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Ar-condicionado Split Inverter</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Ar-condicionado de Janela</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Ar-condicionado Cassete</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Ar-condicionado Piso Teto</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Cortinas de Ar para ambientes climatizados</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Ar-condicionado Multisplit</span>
                    </li>
                  </ul>
                  <p className="text-sm text-muted-foreground">
                    Conte com uma equipe especializada para instalar o equipamento ideal, seja em residências, comércios ou empresas.
                  </p>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <a href="https://api.whatsapp.com/send?phone=5544991111996&text=Ol%C3%A1%2C%20estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20site%20de%20voc%C3%AAs" target="_blank" rel="noopener noreferrer">
                      Solicitar Orçamento
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
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
                      <CardTitle className="text-2xl mb-2">Manutenção Preventiva e Corretiva</CardTitle>
                      <p className="text-sm text-muted-foreground font-normal">
                        Garantimos o desempenho ideal do seu ar-condicionado com serviços especializados
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Garantimos o desempenho ideal do seu ar-condicionado com serviços especializados para aumentar a eficiência, prolongar a vida útil dos equipamentos e evitar falhas inesperadas.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Nossa equipe realiza manutenções completas tanto preventivas quanto corretivas, sempre seguindo padrões técnicos e garantindo a melhor performance do sistema.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Manutenção preventiva programada</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Atendimento corretivo emergencial</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Limpeza e higienização completa dos sistemas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Troca de peças e componentes</span>
                    </li>
                  </ul>
                  <p className="text-sm text-muted-foreground">
                    Cuidamos do seu equipamento para manter o ambiente sempre confortável, seguro e com ar de qualidade.
                  </p>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <a href="https://api.whatsapp.com/send?phone=5544991111996&text=Ol%C3%A1%21%20Estou%20entrando%20em%20contato%20com%20voc%C3%AAs%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.%20" target="_blank" rel="noopener noreferrer">
                      Solicitar Orçamento
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
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
                      <CardTitle className="text-2xl mb-2">PMOC – Plano de Manutenção, Operação e Controle</CardTitle>
                      <p className="text-sm text-muted-foreground font-normal">
                        Garantimos total conformidade com a Lei 13.589/2018 por meio de um PMOC completo
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Garantimos total conformidade com a Lei 13.589/2018 por meio de um PMOC completo, estruturado e elaborado por profissionais habilitados. Nossa equipe assegura a qualidade do ar, a segurança dos usuários e o pleno funcionamento dos sistemas de climatização.
                  </p>
                  <p className="text-muted-foreground font-semibold mb-4">
                    O que oferecemos no PMOC:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Elaboração do PMOC conforme a Lei 13.589/2018 e normas técnicas vigentes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Análise de qualidade do ar e condições ambientais</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Relatórios técnicos completos e atualizados</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Acompanhamento periódico e documentação obrigatória sempre em dia</span>
                    </li>
                  </ul>
                  <p className="text-sm text-muted-foreground">
                    Atendemos empresas, comércios e ambientes que exigem conformidade legal e máxima qualidade do ar.
                  </p>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <a href="https://api.whatsapp.com/send?phone=5544991111996&text=Ol%C3%A1%21%20Estou%20entrando%20em%20contato%20com%20voc%C3%AAs%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.%20" target="_blank" rel="noopener noreferrer">
                      Solicitar Orçamento
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
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
                      <CardTitle className="text-2xl mb-2">Projetos de Infraestrutura para Ar-Condicionado</CardTitle>
                      <p className="text-sm text-muted-foreground font-normal">
                        Desenvolvemos projetos completos de infraestrutura para garantir instalações seguras
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Desenvolvemos projetos completos de infraestrutura para garantir instalações seguras, eficientes e preparadas para o melhor desempenho dos sistemas de climatização. Atuamos desde o planejamento até a adequação final do ambiente, sempre seguindo normas técnicas e as necessidades do seu projeto.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Projetos elétricos e hidráulicos para sistemas de climatização</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Dimensionamento correto dos equipamentos e tubulações</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Adequação estrutural e funcional dos ambientes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Consultoria técnica especializada para soluções personalizadas</span>
                    </li>
                  </ul>
                  <p className="text-sm text-muted-foreground">
                    Ideal para obras residenciais, comerciais e empresariais que exigem uma instalação bem planejada e duradoura.
                  </p>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <a href="https://api.whatsapp.com/send?phone=5544991111996&text=Ol%C3%A1%21%20Estou%20entrando%20em%20contato%20com%20voc%C3%AAs%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.%20" target="_blank" rel="noopener noreferrer">
                      Solicitar Orçamento
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Serviços Adicionais */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Serviços Complementares</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Além da instalação e manutenção, oferecemos uma linha completa de serviços complementares para garantir desempenho, segurança e eficiência máxima dos sistemas de climatização.
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
                      Avaliação completa da eficiência térmica do ambiente para identificar melhorias e otimizar o desempenho dos sistemas.
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
                      Monitoramento e análise da qualidade do ar interno, garantindo ambientes mais saudáveis e em conformidade com normas vigentes.
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
                      Estudos e soluções para reduzir o consumo de energia, elevando o rendimento dos equipamentos.
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
                      Emissão de documentação técnica completa para obras, vistorias, conformidade legal e auditorias.
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
                    <h3 className="font-semibold text-lg">Retrofit de Sistemas</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Modernização de sistemas antigos para melhorar eficiência, reduzir custos e aumentar a vida útil dos equipamentos.
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
                      Suporte técnico para obtenção de certificações e cumprimento de requisitos normativos.
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
                    <h3 className="font-semibold text-lg">Monitoramento Remoto</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Acompanhamento 24/7 do desempenho dos equipamentos, prevenindo falhas e otimizando a operação.
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
                    <h3 className="font-semibold text-lg">Consultoria Especializada</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Orientação técnica para projetos, obras, climatização e melhorias operacionais.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Processo de Trabalho */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Como Trabalhamos</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Nosso processo foi desenvolvido para garantir qualidade, segurança e eficiência em cada etapa do serviço.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center space-y-4">
                <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-semibold text-lg">Diagnóstico</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Avaliação completa do ambiente e identificação das necessidades para definir a solução ideal.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-semibold text-lg">Planejamento</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Desenvolvimento do projeto, definição dos equipamentos e apresentação do orçamento detalhado.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="font-semibold text-lg">Execução</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Instalação ou manutenção realizada por profissionais qualificados, seguindo normas técnicas e garantindo o melhor desempenho.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="font-semibold text-lg">Acompanhamento</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Suporte contínuo, manutenções programadas e orientação para manter seu sistema sempre em perfeito funcionamento.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Precisa de Algum Desses Serviços?</h2>
              <p className="text-lg text-primary-foreground/90 leading-relaxed">
                Fale conosco e receba um orçamento rápido e personalizado para sua necessidade.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <a href="https://api.whatsapp.com/send?phone=5544991111996&text=Ol%C3%A1%21%20Estou%20entrando%20em%20contato%20com%20voc%C3%AAs%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.%20" target="_blank" rel="noopener noreferrer">
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Solicite um Orçamento</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Entre em contato diretamente pelo WhatsApp para um atendimento rápido e personalizado.
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
                      Atendimento rápido • Orçamento gratuito • Suporte 24/7
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
