import React from 'react';
import { Link } from 'react-router-dom';
import { FadeInSection, HoverCard } from '../components/shared/Animations';
import AboutUsImg from '../assets/images/aboutus.jpg';
import { BOOKING_URL } from '../constants';

// Import SVGs
import IndividualTherapy from '../assets/images/individual-therapy.svg';
import CouplesTherapy from '../assets/images/couples-therapy.svg';
import FamilyTherapy from '../assets/images/family-therapy.svg';
import GroupTherapy from '../assets/images/group-therapy.svg';
import OnlineTherapy from '../assets/images/online-therapy.svg';

const ChineseServices = () => {
  const services = [
    {
      icon: IndividualTherapy,
      title: "个人治疗",
      description: "焦虑症、抑郁症、压力管理、自我认同、职业压力及人际关系问题",
    },
    {
      icon: CouplesTherapy,
      title: "伴侣治疗",
      description: "改善沟通、重建信任、解决家庭冲突",
    },
    {
      icon: FamilyTherapy,
      title: "家庭咨询",
      description: "亲子关系改善、育儿指导、文化适应相关问题",
    },
    {
      icon: GroupTherapy,
      title: "支持小组 & 工作坊",
      description: "提供同行交流、共同成长和学习的平台",
    },
    {
      icon: OnlineTherapy,
      title: "加州线上服务",
      description: "为加州居民提供远程心理咨询，方便灵活，安全私密"
    }
  ];

  const checklistItems = [
    "专为亚裔美国社区提供量身定制的心理治疗",
    "提供中英文双语服务",
    "理解文化背景对心理健康的影响",
    "科学的心理治疗方法结合个性化需求",
    "提供加州线上心理咨询，打破地域限制"
  ]

  return (
    <div className="min-h-screen pt-20 sm:pt-24 md:pt-32 bg-brand-background-secondary">
      {/* Hero Section */}
      <section className="mb-12 sm:mb-16 md:mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-brand-text-primary mb-6">
              Mind Matters Center
            </h1>
            <p className="text-xl sm:text-2xl text-brand-text-primary mb-4">
              为您的心理健康提供文化适应性的帮助
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-brand-background-primary">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInSection >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left max-w-xl mx-auto lg:mx-0">
                <h2 className="text-3xl font-serif text-brand-text-primary mb-6">
                  关于我们
                </h2>
                <p className="text-lg text-brand-text-primary/80 leading-relaxed">
                  <strong className="text-brand-primary">Mind Matters Center (MMC)</strong>,是一家专注于提供文化适应性心理治疗和心理健康支持的机构，致力于为加州华人以及亚裔的个人和家庭提供专业的心理服务。我们理解不同文化背景下的心理健康需求各不相同，因此，MMC 提供结合现代心理治疗方法和文化敏感性的服务，以满足不同族裔和语言背景的客户需求。
                </p>
              </div>

              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg mx-auto lg:mx-0 w-full max-w-2xl">
                <img
                  src={AboutUsImg}
                  alt="Mind Matters Center peaceful therapy space"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-20 bg-brand-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-xl md:text-3xl lg:text-5xl font-serif text-brand-text-primary mb-8 md:mb-12">
              我们的服务
            </h2>
            <p className="text-lg text-brand-text-primary/80 leading-relaxed mb-6">
              MMC 提供针对华人及亚裔美国社区常见心理问题的专业心理治疗和咨询服务:
            </p>
            <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <FadeInSection key={index} delay={index * 100}
                  className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] min-w-[280px] max-w-[380px]">
                  <HoverCard className="bg-white p-6 rounded-lg shadow-sm h-full">
                    <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-4 transition-transform duration-300 hover:scale-105">
                      <img src={service.icon} alt={service.title} className="w-full h-full" />
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-4 text-brand-sage">
                      {service.title}
                    </h3>
                    <p className="text-brand-text-primary text-center">
                      {service.description}
                    </p>
                  </HoverCard>
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Approach Section */}
      <section className="py-12 md:py-16 bg-brand-background-primary">
        <FadeInSection>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-md p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-serif text-brand-text-primary mb-6 text-center">
                文化适应性的心理治疗
              </h2>
              <p className="text-lg text-brand-text-primary mb-8">
                我们理解，在亚裔文化中，心理健康可能受到特定观念的影响，导致人们对主流心理服务存在疑虑。因此，MMC 的心理治疗师采用文化适应性的方式，确保来访者在熟悉的文化环境中获得有效的心理支持。
              </p>
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-brand-text-primary mb-4">
                  为什么选择 MMC？
                </h3>
                <div className="flex flex-col space-y-4">
                  {checklistItems.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <svg className="w-5 h-5 mt-1 text-brand-sage flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      <span className="text-base md:text-lg text-brand-text-primary">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-brand-background-secondary to-brand-background-primary">
        <FadeInSection>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-serif text-brand-text-primary mb-6">
              联系我们
            </h2>
            <p className="text-lg md:text-xl lg:text-3xl text-brand-text-primary mb-8">
              如果您正在面临一些困扰，或想了解更多关于 MMC 的服务，请联系我们。我们将为您提供最适合的支持和治疗方案。
            </p>
            <div className="flex flex-col items-center gap-2">
              <Link
                to={BOOKING_URL} target="_blank"
                className="inline-block bg-brand-coral text-white text-base sm:text-lg md:text-xl font-bold 
                px-6 py-3 rounded-full hover:bg-brand-coralLight transition-all duration-200
                hover:transform hover:scale-105 active:scale-95"
              >
                预约咨询
              </Link>
              <span className="text-sm sm:text-base text-brand-text-primary/80">
                预约 20 分钟咨询
              </span>
            </div>
          </div>
        </FadeInSection>
      </section>
    </div>
  );
};

export default ChineseServices;