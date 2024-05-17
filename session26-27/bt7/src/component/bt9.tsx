import './bt9.css'
export default function bt9() {
  return (
    <>
        <table>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Họ tên</th>
                    <th>Ngày inh</th>
                    <th>Giới tính</th>
                    <th>Địa chỉ</th>
                    <th>Hành động</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Vương</td>
                    <td>24/1/2001</td>
                    <td>Nam</td>
                    <td>Hà Nội</td>
                    <td>
                        <button>Sửa</button>
                        <button>Xóa</button>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Mai</td>
                    <td>18/10/2005</td>
                    <td>Nữ</td>
                    <td>Sơn La</td>
                    <td>
                        <button>Sửa</button>
                        <button>Xóa</button>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr></tr>
            </tfoot>
        </table>
    
    </>
  )
}
