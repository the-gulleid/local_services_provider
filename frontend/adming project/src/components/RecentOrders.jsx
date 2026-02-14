import { MoreHorizontal } from 'lucide-react';

const orders = [
    {
        id: "ORD-001",
        customer: "Liam Johnson",
        amount: "$250.00",
        status: "Completed",
        date: "2023-06-23",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Liam"
    },
    {
        id: "ORD-002",
        customer: "Olivia Smith",
        amount: "$120.50",
        status: "Processing",
        date: "2023-06-24",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Olivia"
    },
    {
        id: "ORD-003",
        customer: "Noah Williams",
        amount: "$350.00",
        status: "Completed",
        date: "2023-06-25",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Noah"
    },
    {
        id: "ORD-004",
        customer: "Emma Brown",
        amount: "$450.00",
        status: "Pending",
        date: "2023-06-26",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma"
    },
    {
        id: "ORD-005",
        customer: "William Jones",
        amount: "$55.00",
        status: "Cancelled",
        date: "2023-06-27",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=William"
    },
];

export default function RecentOrders() {
    return (
        <div className="col-span-3 rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden">
            <div className="p-6 border-b">
                <h3 className="font-semibold text-lg">Recent Orders</h3>
                <p className="text-sm text-muted-foreground">Latest transactions from your store</p>
            </div>
            <div className="p-0">
                <table className="w-full text-sm text-left">
                    <thead className="bg-muted/50 text-muted-foreground font-medium">
                        <tr>
                            <th className="px-6 py-3">Customer</th>
                            <th className="px-6 py-3">Status</th>
                            <th className="px-6 py-3 text-right">Amount</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        {orders.map((order) => (
                            <tr key={order.id} className="hover:bg-muted/50 transition-colors">
                                <td className="px-6 py-4 flex items-center gap-3">
                                    <img src={order.avatar} alt={order.customer} className="w-8 h-8 rounded-full bg-muted" />
                                    <div className="flex flex-col">
                                        <span className="font-medium text-foreground">{order.customer}</span>
                                        <span className="text-xs text-muted-foreground">{order.id}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border
                    ${order.status === 'Completed' ? 'bg-green-50 text-green-700 border-green-200' : ''}
                    ${order.status === 'Processing' ? 'bg-blue-50 text-blue-700 border-blue-200' : ''}
                    ${order.status === 'Pending' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' : ''}
                    ${order.status === 'Cancelled' ? 'bg-red-50 text-red-700 border-red-200' : ''}
                  `}>
                                        {order.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right font-medium">
                                    {order.amount}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
