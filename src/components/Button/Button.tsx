import React from 'react';
import styles from './Button.module.css';

export type ButtonVariant =
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'ghost'
    | 'danger-primary'
    | 'danger-tertiary'
    | 'danger-ghost';

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
    size?: ButtonSize;
    icon?: string | null;
    iconPosition?: 'leading' | 'trailing';
    iconOnly?: boolean;
    skeleton?: boolean;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            children,
            variant = 'primary',
            size = 'lg',
            icon = null,
            iconPosition = 'trailing',
            iconOnly = false,
            skeleton = false,
            className = '',
            disabled,
            ...rest
        },
        ref
    ) => {
        if (skeleton) {
            return (
                <div
                    className={`${styles.button} ${styles.skeleton} ${styles[size]} ${iconOnly ? styles['icon-only'] : ''
                        } ${className}`}
                    role="status"
                    aria-label="Loading..."
                />
            );
        }

        const classes = [
            styles.button,
            styles[variant],
            styles[size],
            iconOnly ? styles['icon-only'] : '',
            className,
        ]
            .filter(Boolean)
            .join(' ');

        const renderIcon = () => {
            if (!icon) return null;
            return (
                <span className={`material-symbols-outlined ${styles.icon}`}>
                    {icon}
                </span>
            );
        };

        return (
            <button className={classes} disabled={disabled} ref={ref} {...rest}>
                {!iconOnly && iconPosition === 'leading' && renderIcon()}
                {!iconOnly && <span className={styles.label}>{children}</span>}
                {iconOnly && renderIcon()}
                {!iconOnly && iconPosition === 'trailing' && renderIcon()}
            </button>
        );
    }
);
Button.displayName = 'Button';
