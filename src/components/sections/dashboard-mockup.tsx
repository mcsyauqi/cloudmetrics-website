"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, DollarSign, Activity, ArrowUpRight, ArrowDownRight } from "lucide-react";

const mockData = {
  revenue: { value: "$124,592", change: "+12.5%", trend: "up" },
  users: { value: "8,429", change: "+23.1%", trend: "up" },
  conversion: { value: "3.24%", change: "-2.4%", trend: "down" },
  sessions: { value: "24.5K", change: "+8.7%", trend: "up" },
};

const chartData = [40, 65, 45, 75, 55, 80, 60, 85, 70, 90, 75, 95];

export function DashboardMockup() {
  return (
    <div className="relative">
      {/* Glow Effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-violet-500/20 rounded-3xl blur-2xl" />

      {/* Main Dashboard Container */}
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
      >
        {/* Window Controls */}
        <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 border-b border-slate-200">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="px-4 py-1 bg-white rounded-md text-xs text-slate-400 border border-slate-200">
              app.cloudmetrics.io/dashboard
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-4 bg-slate-50/50">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            {[
              { icon: DollarSign, label: "Revenue", ...mockData.revenue },
              { icon: Users, label: "Users", ...mockData.users },
              { icon: Activity, label: "Conversion", ...mockData.conversion },
              { icon: TrendingUp, label: "Sessions", ...mockData.sessions },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                className="bg-white rounded-xl p-3 shadow-sm border border-slate-100"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="p-1.5 rounded-lg bg-primary/10">
                    <stat.icon className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <span className={`flex items-center text-xs font-medium ${
                    stat.trend === "up" ? "text-emerald-600" : "text-red-500"
                  }`}>
                    {stat.change}
                    {stat.trend === "up" ? (
                      <ArrowUpRight className="h-3 w-3 ml-0.5" />
                    ) : (
                      <ArrowDownRight className="h-3 w-3 ml-0.5" />
                    )}
                  </span>
                </div>
                <div className="text-lg font-bold text-slate-900">{stat.value}</div>
                <div className="text-xs text-slate-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Chart Area */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.9 }}
            className="bg-white rounded-xl p-4 shadow-sm border border-slate-100"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-slate-900">Revenue Overview</h3>
              <span className="text-xs text-slate-500">Last 12 months</span>
            </div>

            {/* Simple Bar Chart */}
            <div className="flex items-end justify-between h-24 gap-1">
              {chartData.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ height: 0 }}
                  animate={{ height: `${value}%` }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.05 }}
                  className="flex-1 rounded-t bg-gradient-to-t from-blue-500 to-indigo-400 min-h-[4px]"
                />
              ))}
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-[10px] text-slate-400">Jan</span>
              <span className="text-[10px] text-slate-400">Dec</span>
            </div>
          </motion.div>

          {/* Activity List */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 1.1 }}
            className="mt-3 bg-white rounded-xl p-3 shadow-sm border border-slate-100"
          >
            <h3 className="text-xs font-semibold text-slate-900 mb-2">Recent Activity</h3>
            <div className="space-y-2">
              {[
                { text: "New user signup from Google", time: "2m ago" },
                { text: "Payment received - $499", time: "15m ago" },
                { text: "API integration completed", time: "1h ago" },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between text-xs">
                  <span className="text-slate-600 truncate">{item.text}</span>
                  <span className="text-slate-400 ml-2">{item.time}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.3 }}
        className="absolute -left-4 top-1/4 bg-white rounded-lg shadow-lg p-3 border border-slate-200"
      >
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-full bg-emerald-100">
            <TrendingUp className="h-3 w-3 text-emerald-600" />
          </div>
          <div>
            <div className="text-xs font-medium text-slate-900">+47%</div>
            <div className="text-[10px] text-slate-500">Growth</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.4 }}
        className="absolute -right-4 bottom-1/4 bg-white rounded-lg shadow-lg p-3 border border-slate-200"
      >
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-full bg-violet-100">
            <Users className="h-3 w-3 text-violet-600" />
          </div>
          <div>
            <div className="text-xs font-medium text-slate-900">2,847</div>
            <div className="text-[10px] text-slate-500">Active now</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
