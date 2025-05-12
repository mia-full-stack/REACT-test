import { css } from "@emotion/react";

export const popularProductsStyle = css`
    margin-bottom: 50px;
`;

export const productListStyle = css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
`;

export const viewAllButtonStyle = css`
  display: block;
  margin: 20px auto 0;
  padding: 12px 24px;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #2563eb;
  }
`;