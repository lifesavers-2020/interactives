import React, { useState, useCallback } from "react";

interface Props {
  isMatching: () => boolean;
  onClick?: () => void;
}

export const DonorCandidate: React.FC<Props> = ({
  isMatching,
  onClick: parentOnClick,
}) => {
  const [selected, setSelected] = useState(false);

  const onClick = useCallback(() => {
    parentOnClick && parentOnClick();
    isMatching() && setSelected(true);
  }, [parentOnClick, isMatching, setSelected]);

  return (
    <div className="flex justify-center">
      <div onClick={onClick}>
        <img
          style={{ display: selected ? "none" : undefined }}
          src="/assets/imgs/match-in-family/unselected.png"
          alt="Potential donor in the family"
        />
        <img
          style={{
            paddingLeft: 4,
            paddingBottom: 8,
            display: selected ? undefined : "none",
          }}
          src="/assets/imgs/match-in-family/selected.png"
          alt="Unmatched donor in the family"
        />
      </div>
    </div>
  );
};
