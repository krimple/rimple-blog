export default function Footer() {
    const renderDate = new Date().toDateString();
    return (
        <>
            <hr/>
            <p>Ken&apos;s Blog. Point of view irrelevant to others.</p>
            <p>Generated on { renderDate }</p>
        </>
    );
}
