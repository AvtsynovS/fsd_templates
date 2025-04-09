import styled, { css } from 'styled-components';

import { ColorType } from '../../lib';

type DirectionType = 'horizontal' | 'vertical';
type AlignType = 'start' | 'center' | 'end';

type DividerProps = {
  textAlign?: AlignType;
  direction?: DirectionType;
  color?: ColorType;
  className?: string;
  children?: React.ReactNode;
};

const DividerWrapper = styled.div<{
  direction: DirectionType;
  color: ColorType;
  withChildren?: boolean;
  textAlign?: AlignType;
}>`
  display: flex;
  align-items: center;
  margin: ${({ direction, theme }) =>
    direction === 'horizontal'
      ? `${theme.spaces.l} ${theme.spaces.none}`
      : `${theme.spaces.l} ${theme.spaces.l}`};
  width: ${({ direction }) => direction === 'horizontal' && '100%'};
  height: ${({ direction }) => direction === 'vertical' && '100%'};
  gap: ${({ theme }) => theme.spaces.s};
  color: ${({ color, theme }) => theme.colors[color]};

  writing-mode: ${({ direction }) =>
    direction === 'horizontal' ? 'horizontal-tb' : 'vertical-lr'};
  text-orientation: ${({ direction }) =>
    direction === 'horizontal' ? 'mixed' : 'upright'};

  & span {
    white-space: nowrap;
  }

  ${({ withChildren, color, textAlign, direction, theme }) => {
    let leftDivider;
    let rightDivider;

    switch (textAlign) {
      case 'center':
        leftDivider = '50%';
        rightDivider = '50%';
        break;
      case 'end':
        leftDivider = '90%';
        rightDivider = '10%';
        break;
      default:
        leftDivider = '10%';
        rightDivider = '90%';
    }

    return withChildren
      ? css`
          &::before {
            position: relative;
            width: ${direction === 'horizontal' && `${leftDivider}`};
            height: ${direction === 'vertical' && `${leftDivider}`};
            border-block-start: 1px solid transparent;
            border-block-start-color: inherit;
            border-block-end: 0;
            transform: ${direction === 'horizontal'
              ? 'translateY(50%)'
              : 'translateX(50%)'};
            content: '';
          }

          &::after {
            position: relative;
            width: ${direction === 'horizontal' && `${rightDivider}`};
            height: ${direction === 'vertical' && `${rightDivider}`};
            border-block-start: 1px solid transparent;
            border-block-start-color: inherit;
            border-block-end: 0;
            transform: ${direction === 'horizontal'
              ? 'translateY(50%)'
              : 'translateX(50%)'};
            content: '';
          }
        `
      : css`
          height: ${direction === 'horizontal' && `1px`};
          width: ${direction === 'vertical' && `1px`};
          background-color: ${theme.colors[color]};
        `;
  }};
`;

export const Divider = ({
  direction = 'horizontal',
  textAlign = 'center',
  color = ColorType.PRIMARY,
  className,
  children,
}: DividerProps) => {
  return (
    <>
      {children ? (
        <DividerWrapper
          className={className}
          withChildren={!!children}
          direction={direction}
          color={color}
          textAlign={textAlign}
        >
          <span>{children}</span>
        </DividerWrapper>
      ) : (
        <DividerWrapper
          className={className}
          direction={direction}
          color={color}
        />
      )}
    </>
  );
};
