const Container = ({ children }) => {
  return (
    <div className="theme bg-daySky dark:bg-nightStar min-h-screen bg-cover">
      <div className="bg-transparent min-h-screen">
        <div className="py-24 px-12 text-slate-300">{children}</div>
      </div>
    </div>
  );
};

export default Container;
