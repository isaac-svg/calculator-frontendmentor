import React, { useRef } from "react";
import Button from "./Button";
const Calcualtor = () => {
  const refScreen = useRef(null);
  return (
    <>
      <span className="screen" ref={refScreen} id="screen"></span>
      <section className="keyboard">
        <Button value={7} style />
        <Button value={8} style />
        <Button value={9} style />
        <Button value={`DEL`} style="special-key" />
        <Button value={4} style />
        <Button value={5} style />
        <Button value={6} style />
        <Button value={"+"} style />
        <Button value={1} style />
        <Button value={2} style />
        <Button value={3} style />
        <Button value={"-"} style />
        <Button value={"."} style />
        <Button value={0} style />
        <Button value={"/"} style />
        <Button value={"x"} style />
        <Button value={"RESET"} style="span-2 special-key" />
        <Button value={"="} style="span-2 special-key" />
      </section>
    </>
  );
};

export default Calcualtor;
