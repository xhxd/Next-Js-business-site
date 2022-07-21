import { useState, useEffect } from "react";
import PackingMachine from "./PackingMachine";
import { getDocs, collection } from "firebase/firestore";
import { packingMachineData } from "../lib/getData";
import db from "../firebase";

export async function getStaticProps() {
  const packingMachine = [];
  const collectionRef = collection(db, "Packing Machine");
  const querySnapshot = await getDocs(collectionRef);

  querySnapshot.forEach((doc) => {
    packingMachine.push({ id: doc.id, data: doc.data() });
    console.log(doc.data());
  });

  return {
    props: {
      packingMachine: packingMachine,
    },
  };
}

const PackingMachines = ({ packingMachine }) => {
  console.log(packingMachine);
  return (
    <div>
      <PackingMachine />
    </div>
  );
};

export default PackingMachines;
