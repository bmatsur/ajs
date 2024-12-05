import React from 'react'
import Accordion from './InfoAccordion'
import InfoText from './InfoText'

const FAQ = () => {
  return (
    <div>

      <InfoText title='Сроки изготовления' content=''/>
      <InfoText title='' content='Сроки пошива будут зависеть от объема Вашего заказа и сложности моделей. В среднем изготовление корпоративной продукции занимает  10 -18 рабочих дней с момента утверждения всех деталей.Если же Вам нужно "на вчера" - Вы можете согласовать такие условия со своими личным менеджером.'/>
      <InfoText title='' content=''/>

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
      <Accordion title='Свежее дыхание в корпоративной жизни' content={
                    <ul className="list-disc ml-6">
                    <li>Не используйте моющие средства с отбеливателями и хлором.</li>
                    <li>Перед стиркой выверните изделие наизнанку.</li>
                    <li>Стирайте в прохладной воде до 30°C.</li>
                </ul>}/>
      
    </div>
  )
}

export default FAQ