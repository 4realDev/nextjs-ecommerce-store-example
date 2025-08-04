import React from 'react';
import styles from './Button.module.css';
import cn from 'classnames';

export type ButtonProps = {
	onClickFunction: () => void;
	buttonText?: string | undefined;
	buttonIcon?: React.ReactNode;
	isLight?: boolean;
	isDisabled?: boolean;
	customStyles?: React.CSSProperties;
	customClassName?: string;
	centerText?: boolean;
	stopPropagation?: boolean;
};

const Button = ({
	onClickFunction,
	buttonIcon,
	buttonText,
	isLight = false,
	isDisabled = false,
	customStyles,
	customClassName,
	centerText = true,
	stopPropagation = true,
}: ButtonProps) => {
	return (
		<button
			className={cn(
				isLight ? styles['button__light'] : styles['button__dark'],
				[styles['button']],
				{
					[styles['button__light__disabled']]: isDisabled && isLight,
					[styles['button__dark__disabled']]: isDisabled && !isLight,
					customClassName,
				}
			)}
			style={customStyles}
			onClick={(e) => {
				if (stopPropagation) e.stopPropagation();
				onClickFunction();
			}}>
			{buttonIcon && <div className={styles.buttonIcon}>{buttonIcon}</div>}
			{buttonText && (
				<span
					className={styles.buttonText}
					style={{ justifyContent: centerText ? 'center' : 'left' }}>
					{buttonText}
				</span>
			)}
		</button>
	);
};

export default Button;
