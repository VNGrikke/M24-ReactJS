import  './bt8.css'

export default function bt8() {
    const items: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5','Item 6', 'Item 7', 'Item 8','Item 9', 'Item 10', 'Item 11','Item 12', 'Item 13', 'Item 14','Item 15', 'Item 16'];
  return (
    <>
        <div className="header">Header</div>
        <div className="navigation">Navigation</div>
        <div className="body">
            <div className="menu">Menu</div>
            <div className="content">
                <ul className="listItem">
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>    
            <div className="article">Article</div>
        </div>    
    </>
  )
}
