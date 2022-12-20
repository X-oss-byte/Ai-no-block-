/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import {
	RichText,
	useBlockProps,
} from '@wordpress/block-editor';

export default function save( { attributes } ) {

	const {
		url,
		label,
		linkTarget,
		size,
		borderRadius,
		borderWidth,
		uppercase,
		mode,
	} = attributes;

	const buttonClasses = classnames('wp-block-ainoblocks-button__link', size, borderRadius, {
		'is-uppercase': uppercase,
		'no-border-radius': borderRadius === 0,
		'no-border': borderWidth === 0,
	});

	const styleButton = {
		borderRadius: borderRadius ? borderRadius + 'px' : undefined,
	};

	const styleBg = {
		borderRadius: borderRadius ? borderRadius + 'px' : undefined,
		borderWidth: borderWidth ? borderWidth + 'px' : undefined,
	};

	const wrapperClasses = classnames(classnames, {
		'variant': mode,
	});

	const blockProps = useBlockProps.save( {
		className: wrapperClasses,
		style: styleBg,
	} );

	return (
		<div { ...blockProps }>
			<RichText.Content
				tagName="a"
				className={ buttonClasses }
				href={ url }
				style={ styleButton}
				value={ label }
				target={ linkTarget }
			/>
		</div>
	);
}