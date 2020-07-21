import React, { useState, useEffect, useCallback } from "react";
import { DonorCandidate } from "../components/MatchInFamily/DonorCandidate";
import { toast } from "react-toastify";
import { Layout } from "../Layout/Layout";

export const MatchInFamily: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < 4) return;
    toast("Only 25% of people will find the donor in their family.");
  }, [count]);

  const onClick = useCallback(() => {
    if (count >= 4) return;
    setCount(count + 1);
  }, [count, setCount]);

  return (
    <Layout>
      <div className="grid grid-cols-2 gap-4">
        <DonorCandidate onClick={onClick} isMatching={() => count < 3} />
        <DonorCandidate onClick={onClick} isMatching={() => count < 3} />
        <DonorCandidate onClick={onClick} isMatching={() => count < 3} />
        <DonorCandidate onClick={onClick} isMatching={() => count < 3} />
      </div>
    </Layout>
  );
};
