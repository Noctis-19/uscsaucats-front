export default function Map({ url }: { url: string }) {
  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
      <iframe 
        src={url}
        className="w-full h-full border-0"
        allowFullScreen
        loading="lazy">
      </iframe>
    </div>
  );
}
