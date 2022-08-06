import styled from '@emotion/styled';

export const Button = styled.button`
    color: #212121;
    background-color: #f5f4fa;
    font-size: 16px;
    line-height: 1.62;
    text-align: center;
    letter-spacing: 0.03em;
    border: 1px solid #9c9c9c;
    padding: 3px 12px;
    border-radius: 4px;
    cursor: pointer;
    transition-property: color, background-color, box-shadow;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

    &:not(:last-child) {
    margin-right: 20px;
    }

     &:hover {
    color: #fff;
    background-color: #2196f3;
    box-shadow: 0px 3px 1px rgb(0 0 0 / 10%), 0px 1px 2px rgb(0 0 0 / 8%), 0px 2px 2px rgb(0 0 0 / 12%);
  }
    `;