import Chart from "../components/Chart";
import OptionForm from "../components/OptionForm";
import RequiredForm from "../components/RequiredForm";
import { useState } from "react";

const Home = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <RequiredForm />
      <OptionForm setOpen={setOpen} />
      {open && <Chart />}
    </div>
  );
};

export default Home;
