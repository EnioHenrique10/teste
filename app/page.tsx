"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  Heart,
  Activity,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  MessageCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function FisioterapeutaSamuel() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    {
      name: "Fisioterapia Ortopédica",
      description: "Tratamento de lesões musculoesqueléticas, fraturas e pós-operatório",
      image: "/placeholder.svg?height=300&width=400",
      benefits: ["Alívio da dor", "Recuperação funcional", "Prevenção de lesões"],
    },
    {
      name: "Fisioterapia Neurológica",
      description: "Reabilitação de pacientes com AVC, Parkinson e outras condições neurológicas",
      image: "/placeholder.svg?height=300&width=400",
      benefits: ["Melhora da coordenação", "Recuperação motora", "Qualidade de vida"],
    },
    {
      name: "Fisioterapia Respiratória",
      description: "Tratamento de doenças pulmonares e melhora da capacidade respiratória",
      image: "/placeholder.svg?height=300&width=400",
      benefits: ["Melhora da respiração", "Fortalecimento pulmonar", "Prevenção de complicações"],
    },
    {
      name: "Fisioterapia Esportiva",
      description: "Prevenção e tratamento de lesões em atletas e praticantes de esportes",
      image: "/placeholder.svg?height=300&width=400",
      benefits: ["Performance otimizada", "Recuperação rápida", "Prevenção de lesões"],
    },
    {
      name: "RPG - Reeducação Postural Global",
      description: "Correção de desvios posturais e alinhamento corporal",
      image: "/placeholder.svg?height=300&width=400",
      benefits: ["Postura corrigida", "Alívio de tensões", "Bem-estar geral"],
    },
    {
      name: "Pilates Terapêutico",
      description: "Fortalecimento do core e melhora da estabilidade corporal",
      image: "/placeholder.svg?height=300&width=400",
      benefits: ["Fortalecimento muscular", "Flexibilidade", "Equilíbrio corporal"],
    },
  ]

  const testimonials = [
    {
      name: "Maria Silva",
      text: "O Dr. Samuel me ajudou a recuperar totalmente após minha cirurgia no joelho. Profissional excepcional!",
      rating: 5,
    },
    {
      name: "João Santos",
      text: "Excelente fisioterapeuta! Tratamento personalizado e resultados incríveis para minha dor nas costas.",
      rating: 5,
    },
    {
      name: "Ana Costa",
      text: "Recomendo muito! O Samuel é muito atencioso e competente. Me sinto muito melhor após o tratamento.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Activity className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-blue-900">Dr. Samuel Fisioterapeuta</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors">
                Início
              </Link>
              <Link href="#sobre" className="text-gray-700 hover:text-blue-600 transition-colors">
                Sobre
              </Link>
              <Link href="#servicos" className="text-gray-700 hover:text-blue-600 transition-colors">
                Serviços
              </Link>
              <Link href="#importancia" className="text-gray-700 hover:text-blue-600 transition-colors">
                Importância
              </Link>
              <Link href="#contato" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contato
              </Link>

              <Link href="/login" className="text-blue-600 hover:text-blue-800 font-semibold">
                Adm
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <Link href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Início
                </Link>
                <Link href="#sobre" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Sobre
                </Link>
                <Link href="#servicos" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Serviços
                </Link>
                <Link href="#importancia" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Importância
                </Link>
                <Link href="#contato" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Contato
                </Link>
                <Link href="/login" className="text-blue-600 hover:text-blue-800 font-semibold">
                Adm
              </Link>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`transform transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
                Sua <span className="text-blue-600">Recuperação</span> é Nossa Prioridade
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Fisioterapia especializada com Dr. Samuel. Tratamentos personalizados para sua saúde e bem-estar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Agendar Consulta
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  Saiba Mais
                </Button>
              </div>
            </div>
            <div
              className={`transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
            >
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Dr. Samuel Fisioterapeuta"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div className="transform hover:scale-105 transition-transform">
              <Users className="h-12 w-12 mx-auto mb-4" />
              <div className="text-3xl font-bold">500+</div>
              <div>Pacientes Atendidos</div>
            </div>
            <div className="transform hover:scale-105 transition-transform">
              <Award className="h-12 w-12 mx-auto mb-4" />
              <div className="text-3xl font-bold">8+</div>
              <div>Anos de Experiência</div>
            </div>
            <div className="transform hover:scale-105 transition-transform">
              <Heart className="h-12 w-12 mx-auto mb-4" />
              <div className="text-3xl font-bold">98%</div>
              <div>Taxa de Satisfação</div>
            </div>
            <div className="transform hover:scale-105 transition-transform">
              <Star className="h-12 w-12 mx-auto mb-4" />
              <div className="text-3xl font-bold">5.0</div>
              <div>Avaliação Média</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Dr. Samuel em seu consultório"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Conheça o Dr. Samuel</h2>
              <p className="text-gray-700 mb-6 text-lg">
                Fisioterapeuta formado pela Universidade Federal com especialização em Fisioterapia Ortopédica e
                Neurológica. Com mais de 8 anos de experiência, dedico-me a proporcionar o melhor tratamento para cada
                paciente.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                  <span>Graduação em Fisioterapia - UFMG</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                  <span>Especialização em Fisioterapia Ortopédica</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                  <span>Pós-graduação em Fisioterapia Neurológica</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                  <span>Certificação em RPG e Pilates Terapêutico</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section id="importancia" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Por que a Fisioterapia é Importante?</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              A fisioterapia é essencial para manter a qualidade de vida, prevenir lesões e acelerar a recuperação.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <CardHeader className="text-center">
                <Heart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-blue-900">Prevenção de Lesões</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  A fisioterapia preventiva ajuda a identificar e corrigir desequilíbrios musculares antes que se tornem
                  lesões graves.
                </p>
              </CardContent>
            </Card>

            <Card className="transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <CardHeader className="text-center">
                <Activity className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-blue-900">Recuperação Acelerada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Técnicas especializadas aceleram o processo de cura e restauram a função normal dos tecidos
                  lesionados.
                </p>
              </CardContent>
            </Card>

            <Card className="transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-blue-900">Qualidade de Vida</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Melhora significativa na mobilidade, redução da dor e aumento da independência nas atividades diárias.
                </p>
              </CardContent>
            </Card>

            <Card className="transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <CardHeader className="text-center">
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-blue-900">Performance Esportiva</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Otimização do desempenho atlético através de fortalecimento específico e correção biomecânica.
                </p>
              </CardContent>
            </Card>

            <Card className="transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <CardHeader className="text-center">
                <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-blue-900">Tratamento Não-Invasivo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Alternativa segura e eficaz a procedimentos cirúrgicos para muitas condições musculoesqueléticas.
                </p>
              </CardContent>
            </Card>

            <Card className="transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <CardHeader className="text-center">
                <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-blue-900">Envelhecimento Saudável</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Mantém a mobilidade e independência durante o processo de envelhecimento, prevenindo quedas e
                  fraturas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Nossos Serviços</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Oferecemos uma ampla gama de tratamentos fisioterapêuticos especializados para atender suas necessidades
              específicas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="transform hover:scale-105 transition-all duration-300 hover:shadow-xl overflow-hidden"
              >
                <div className="relative h-48">
                  <Image src={service.image || "/placeholder.svg"} alt={service.name} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="text-blue-900">{service.name}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-blue-800">Benefícios:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-blue-600" />
                          <span className="text-sm text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">O que Nossos Pacientes Dizem</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="transform hover:scale-105 transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-blue-900">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Entre em Contato</h2>
            <p className="text-xl text-gray-700">
              Agende sua consulta e comece sua jornada para uma vida mais saudável
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-semibold">Telefone</p>
                    <p className="text-gray-700">(81) 99999-9999</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-700">samuel@fisioterapia.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-semibold">Endereço</p>
                    <p className="text-gray-700">
                      Rua Principal, 456 - Centro
                      <br />
                      Paulista, PE - CEP: 53401-000
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-semibold">Horário de Funcionamento</p>
                    <p className="text-gray-700">
                      Segunda a Sexta: 8h às 18h
                      <br />
                      Sábado: 8h às 12h
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-900">Envie uma Mensagem</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Input placeholder="Nome" />
                      <Input placeholder="Telefone" />
                    </div>
                    <Input type="email" placeholder="Email" />
                    <Input placeholder="Assunto" />
                    <Textarea placeholder="Mensagem" rows={4} />
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Enviar Mensagem</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5581999999999?text=Olá! Gostaria de agendar uma consulta com o Dr. Samuel."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 animate-pulse"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Activity className="h-8 w-8" />
                <span className="text-xl font-bold">Dr. Samuel Fisioterapeuta</span>
              </div>
              <p className="text-blue-200">Cuidando da sua saúde e bem-estar com excelência e dedicação.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
              <div className="space-y-2">
                <Link href="#inicio" className="block text-blue-200 hover:text-white transition-colors">
                  Início
                </Link>
                <Link href="#sobre" className="block text-blue-200 hover:text-white transition-colors">
                  Sobre
                </Link>
                <Link href="#servicos" className="block text-blue-200 hover:text-white transition-colors">
                  Serviços
                </Link>
                <Link href="#contato" className="block text-blue-200 hover:text-white transition-colors">
                  Contato
                </Link>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-blue-200">
                <p>(81) 99999-9999</p>
                <p>samuel@fisioterapia.com</p>
                <p>
                  Rua Principal, 456 - Centro
                  <br />
                  Paulista, PE
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
            <p>&copy; 2024 Dr. Samuel Fisioterapeuta. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
