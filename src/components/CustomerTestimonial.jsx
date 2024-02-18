function CustomerTestimony({ customer }) {
  return (
    <div className="flex flex-col w-[300px] md:w-[400px] bg-white rounded-[32px] p-[28px] shadow-sm  ">
      <p className="font-[200] text-[#031432] text-[16px] italic ">
        orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore
      </p>
      <div className="flex gap-2">
        <img
          src={customer.picture}
          alt=""
          className="w-[48px] h-[48px] object-cover rounded-full "
        />
        <div className="flex flex-col">
          <p className="text-[18px] text-[#00BFA5] font-[500] ">
            {customer.name}
          </p>
          <p className="text-[12px] text-[#6C87AE] ">{customer.category}</p>
        </div>
      </div>
    </div>
  );
}

export default CustomerTestimony;
