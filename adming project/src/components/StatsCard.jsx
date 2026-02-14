import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { cn } from '../lib/utils';

export default function StatsCard({ title, value, icon: Icon, trend, trendValue, color }) {
    const isPositive = trend === 'up';

    return (
        <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md">
            <div className="flex items-center justify-between pb-2">
                <span className="text-sm font-medium text-muted-foreground">{title}</span>
                <div className={cn("p-2 rounded-lg bg-opacity-10", color)}>
                    <Icon className={cn("w-4 h-4", color.replace('bg-', 'text-'))} />
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <h3 className="text-2xl font-bold">{value}</h3>
                <div className="flex items-center text-xs">
                    <span className={cn("flex items-center font-medium", isPositive ? "text-green-600" : "text-red-600")}>
                        {isPositive ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
                        {trendValue}
                    </span>
                    <span className="text-muted-foreground ml-2">from last month</span>
                </div>
            </div>
        </div>
    );
}
