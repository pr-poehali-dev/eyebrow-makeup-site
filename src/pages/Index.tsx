import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const services = [
    {
      title: 'Перманентный макияж бровей',
      description: 'Естественный и долговременный результат, который подчеркнёт вашу естественную красоту',
      icon: 'Sparkles',
      price: 'от 5000 ₽'
    },
    {
      title: 'Окрашивание бровей',
      description: 'Профессиональное окрашивание для идеального оттенка и формы бровей',
      icon: 'Palette',
      price: 'от 800 ₽'
    },
    {
      title: 'Ламинирование ресниц',
      description: 'Эффект длинных, изогнутых ресниц на 6-8 недель без туши',
      icon: 'Eye',
      price: 'от 2000 ₽'
    }
  ];

  const portfolio = [
    {
      image: 'https://cdn.poehali.dev/projects/e5e83855-42f9-4d56-aba7-28c752d54237/files/ff0402bc-68f4-4f49-bd96-fa32e55792e0.jpg',
      title: 'Перманентный макияж'
    },
    {
      image: 'https://cdn.poehali.dev/projects/e5e83855-42f9-4d56-aba7-28c752d54237/files/58583478-73c7-45e6-8c9c-89dc52dfd0be.jpg',
      title: 'Ламинирование ресниц'
    },
    {
      image: 'https://cdn.poehali.dev/projects/e5e83855-42f9-4d56-aba7-28c752d54237/files/48800f5f-329f-4dd7-ad23-e23063402f5d.jpg',
      title: 'Окрашивание бровей'
    }
  ];

  const reviews = [
    {
      name: 'Анна',
      text: 'Маргарита - настоящий профессионал! Результат превзошел все ожидания. Брови выглядят естественно и красиво.',
      rating: 5
    },
    {
      name: 'Екатерина',
      text: 'Делала ламинирование ресниц - эффект потрясающий! Ресницы стали длиннее и объемнее. Очень довольна!',
      rating: 5
    },
    {
      name: 'Ольга',
      text: 'Окрашивание бровей - просто волшебство! Маргарита учла все мои пожелания. Рекомендую всем!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/30 via-background to-muted/20">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Маргарита Кузнецова
            </h1>
            <div className="hidden md:flex gap-6">
              {['Главная', 'Услуги', 'Портфолио', 'Прайс', 'Обо мне', 'Отзывы', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-medium hover:text-primary transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                  Записаться
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Запись на процедуру</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" placeholder="Ваше имя" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" placeholder="+7 (___) ___-__-__" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="service">Услуга</Label>
                    <Input id="service" placeholder="Выберите услугу" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="message">Комментарий</Label>
                    <Textarea id="message" placeholder="Дополнительная информация" />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-accent">
                    Отправить заявку
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </nav>

      <section id="главная" className={`pt-32 pb-20 px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in">
            Красота в деталях
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up max-w-2xl mx-auto">
            Перманентный макияж, окрашивание бровей и ламинирование ресниц от профессионала
          </p>
          <Button 
            onClick={() => scrollToSection('услуги')}
            size="lg" 
            className="bg-gradient-to-r from-primary to-accent hover:scale-105 transition-transform duration-300 text-lg px-8 py-6"
          >
            Узнать больше
            <Icon name="ArrowRight" className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      <section id="услуги" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Услуги</h2>
          <p className="text-center text-muted-foreground mb-12">Профессиональный уход за вашей красотой</p>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 hover:border-primary/50 bg-gradient-to-br from-background to-secondary/20"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 inline-block p-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Icon name={service.icon} size={40} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <p className="text-2xl font-bold text-primary">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="портфолио" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Портфолио</h2>
          <p className="text-center text-muted-foreground mb-12">Мои работы говорят сами за себя</p>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white font-bold text-xl p-6">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="прайс" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Прайс-лист</h2>
          <p className="text-center text-muted-foreground mb-12">Прозрачные цены на все услуги</p>
          <Card className="border-2">
            <CardContent className="p-8">
              {[
                { service: 'Перманентный макияж бровей', price: '5000 - 8000 ₽' },
                { service: 'Коррекция перманентного макияжа', price: '3000 ₽' },
                { service: 'Окрашивание бровей', price: '800 ₽' },
                { service: 'Архитектура бровей', price: '1200 ₽' },
                { service: 'Ламинирование ресниц', price: '2000 ₽' },
                { service: 'Ламинирование + окрашивание', price: '2500 ₽' }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex justify-between items-center py-4 border-b last:border-b-0 hover:bg-secondary/20 transition-colors px-4 rounded"
                >
                  <span className="font-medium">{item.service}</span>
                  <span className="text-primary font-bold">{item.price}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="обо мне" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Обо мне</h2>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Icon name="User" size={120} className="text-primary/40" />
              </div>
            </div>
            <div className="flex-1 space-y-6">
              <h3 className="text-3xl font-bold">Маргарита Кузнецова</h3>
              <p className="text-lg text-muted-foreground">
                Сертифицированный мастер перманентного макияжа с опытом работы более 5 лет.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Award" className="text-primary mt-1" size={24} />
                  <div>
                    <p className="font-semibold">Сертифицированный специалист</p>
                    <p className="text-sm text-muted-foreground">Международные сертификаты и дипломы</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Heart" className="text-primary mt-1" size={24} />
                  <div>
                    <p className="font-semibold">Более 500 довольных клиентов</p>
                    <p className="text-sm text-muted-foreground">Индивидуальный подход к каждому</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Shield" className="text-primary mt-1" size={24} />
                  <div>
                    <p className="font-semibold">Безопасность и качество</p>
                    <p className="text-sm text-muted-foreground">Только профессиональные материалы</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="отзывы" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Отзывы</h2>
          <p className="text-center text-muted-foreground mb-12">Что говорят мои клиенты</p>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-2">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                  <p className="font-bold text-primary">— {review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="контакты" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
          <p className="text-muted-foreground mb-12">Свяжитесь со мной удобным способом</p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
              <CardContent className="p-6 text-center">
                <Icon name="Phone" size={32} className="text-primary mx-auto mb-4" />
                <p className="font-semibold mb-2">Телефон</p>
                <p className="text-muted-foreground">+7 (900) 123-45-67</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
              <CardContent className="p-6 text-center">
                <Icon name="Instagram" size={32} className="text-primary mx-auto mb-4" />
                <p className="font-semibold mb-2">Instagram</p>
                <p className="text-muted-foreground">@margarita_brows</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
              <CardContent className="p-6 text-center">
                <Icon name="MapPin" size={32} className="text-primary mx-auto mb-4" />
                <p className="font-semibold mb-2">Адрес</p>
                <p className="text-muted-foreground">г. Москва, ул. Примерная, 1</p>
              </CardContent>
            </Card>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:scale-105 transition-transform text-lg px-12 py-6">
                Записаться на процедуру
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Запись на процедуру</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="name2">Имя</Label>
                  <Input id="name2" placeholder="Ваше имя" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone2">Телефон</Label>
                  <Input id="phone2" placeholder="+7 (___) ___-__-__" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="service2">Услуга</Label>
                  <Input id="service2" placeholder="Выберите услугу" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message2">Комментарий</Label>
                  <Textarea id="message2" placeholder="Дополнительная информация" />
                </div>
                <Button className="w-full bg-gradient-to-r from-primary to-accent">
                  Отправить заявку
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      <footer className="py-8 px-4 bg-muted/50 border-t">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Маргарита Кузнецова. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
