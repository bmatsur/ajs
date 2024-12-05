import React, {useState, useEffect} from 'react'

import Accordion from './InfoAccordion'
import InfoText from './InfoText'
import ContactUs from './ContactUs'

const FAQ = () => {

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1000);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 700);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1000);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 700);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div>

      {/* informational texts */}
      
      {isLargeScreen ? (
        <>
          <InfoText title='Свежее дыхание в корпоративной жизни' 
                content='Итак, сайт Mechy, который вы видите перед собой, является кульминацией «идеального шторма» многолетнего поиска, оттачивания, создания и объединения наших навыков и опыта.
                        А теперь - вот оно! Мы очень рады поделиться с вами нашим ассортиментом, нашими идеями и нашей страстью.
      '/>
          <InfoText title='Снимаем головную боль' 
                content='Наша цель состоит в том, чтобы избавить Вас от лишнего. Выбор и заказ брендированной продукции должен проходить приятно, а все сложности и специфики производства останутся за кулисами. 
                        Будте максимально продуктивны в своем деле и не расстачивайте свою эненргию  на поиски, задачи и контроль подрядчиков.'
      />
        </>
      ) : (
        <>
          <InfoText title='Сроки изготовления' content='Сроки пошива будут зависеть от объема Вашего заказа и сложности моделей. В среднем изготовление корпоративной продукции занимает  10 -18 рабочих дней с момента утверждения всех деталей.'
                                              content2='Если же Вам нужно "на вчера" - Вы можете согласовать такие условия со своими личным менеджером.'/>
          <InfoText title='Стоимость' content='Сроки пошива будут зависеть от объема Вашего заказа и сложности моделей. В среднем изготовление корпоративной продукции занимает  10 -18 рабочих дней с момента утверждения всех деталей.Если же Вам нужно "на вчера" - Вы можете согласовать такие условия со своими личным менеджером.'/>
          <InfoText title='Брендирование' content='Стоимость производства брендированной продукции  на заказ  расчитывается 
                                                    индивидуально. Цена зависит от сложности работы, брендирования, материалов, тиража 
                                                    и срочности. Мы подберем для вас оптимальный вариант в соответствии с вашим бюджетом'/>
        </>
      )}
      


      

      <h1 className="text-4xl text-black font-bold text-center mb-16 mt-16">Часто задаваемые вопросы</h1>

      {/* accordion */}
      <Accordion title='Материал' content={
                    <ul className="list-disc ml-6">
                        <li>Хлопок 100%</li>
                        <li>Хлопок/Полиэстер 85/15%</li>
                        <li>Флис</li>
                    </ul>
          }/>
      <Accordion title='Как заказать' content={<p>Выбирайте из готовых моделей или отправьте нам свой дизайн для пошива.</p>}/>
      <Accordion title='Виды нанесения' content={
                                                <ul className="list-disc ml-6">
                                                    <li>Шелкография</li>
                                                    <li>Вышивка</li>
                                                    <li>Цифровая печать</li>
                                                    <li>Флекс</li>
                                                </ul>}/>
                                            
      {isSmallScreen ? (
        <>
          <Accordion title='Уход за товаром' content={
                                            <ul className='list-disc ml-6'>
                                              <li>Не рекомендуем использовать моющие средства и стиральные порошки с отбеливателями и хлором.</li>
                                              <li>Перед глажкой и стиркой желательно вывернуть изделие наизнанку.</li>
                                              <li>Стирка в прохладной воде не выше 30°С без включения режима сушки</li>
                                            </ul>
          }/>
        </>
      ) : (
        <>

          <Accordion title='Свежее дыхание в корпоративной жизни' content={
                        <ul className="list-disc ml-6">
                          <li>Не используйте моющие средства с отбеливателями и хлором.</li>
                          <li>Перед стиркой выверните изделие наизнанку.</li>
                          <li>Стирайте в прохладной воде до 30°C.</li>
                        </ul>}/>
        </>
      )}

      <div className='p-4 rounded-lg mb-4 max-w-4xl mx-auto'>
        <ContactUs />
      </div>

      
    </div>
  )
}

export default FAQ