import React from "react";

const ContactUs = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start  p-6 md:p-12 max-w-5xl mx-auto">
      {/* Contact Information Section */}
      <div className="flex flex-col space-y-4 md:pr-8">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center space-x-2">
          Контакты <span className="text-purple-600 text-3xl">📱</span>
        </h2>
        <p className=" font-bold text-2xl">example@gmail.com</p>
        <p className=" font-bold text-2xl">+380 630 130 103</p>
        <div className="flex space-x-4 text-2xl">
          <a href="#" className="text-blue-500 hover:text-blue-700">
            <i className="fab fa-viber"></i>
          </a>
          <a href="#" className="text-blue-400 hover:text-blue-600">
            <i className="fab fa-telegram"></i>
          </a>
          <a href="#" className="text-green-500 hover:text-green-700">
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="flex flex-col space-y-4 w-full md:w-1/2">
        <h2 className="text-2xl font-bold text-gray-800">Свяжитесь с нами</h2>
        <p className="text-gray-700 text-base">
          Введите свои контактные данные, и наш менеджер свяжется с Вами{" "}
          <span className="text-green-500 font-semibold">в течение 15 минут</span>
        </p>
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Ваше Имя"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="email"
            placeholder="Ваша электронная почта"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="tel"
            placeholder="Ваш номер телефона"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="bg-green-500 text-white font-semibold py-3 rounded-lg hover:bg-green-600 transition duration-200"
          >
            Заказать
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
