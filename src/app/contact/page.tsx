import React from "react";
import MapComponent from '@/components/Map';

export default async function ContactPage() {

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 text-justify cursor-default">
      <MapComponent url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2838.326130832152!2d-0.6006584233982755!3d44.65168808728216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd551e263cbd2863%3A0x3dcf94936b900c1d!2s4%20All.%20Joseph%20Wresinski%2C%2033650%20Saucats!5e0!3m2!1sfr!2sfr!4v1765271113065!5m2!1sfr!2sfr" />
      <h2 className="text-3xl text-primary font-bold mb-4 mt-4">Contact</h2>
    </div>
  );
}
