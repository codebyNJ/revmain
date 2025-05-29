import { Eye, TrendingUp, Activity } from 'lucide-react';
import Dialog from './ui/Dialog';

interface DashboardProps {
  type: string;
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ type, title, isOpen, onClose }) => {
  return (
    <Dialog title={title} isOpen={isOpen} onClose={onClose}>
      <div className="max-w-6xl max-h-[90vh] overflow-auto">
        {type === 'tracking' && <TrackingDashboard />}
        {type === 'location' && <LocationDashboard />}
        {type === 'reporting' && <ReportingDashboard />}
      </div>
    </Dialog>
  );
};

const TrackingDashboard = () => (
  <div className="bg-gray-800 text-white p-6 rounded-lg min-h-[500px]">
    <div className="flex items-center justify-between mb-6">
      <h3 className="text-2xl font-bold text-white">Real-time Ad Tracking - Bangalore</h3>
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
        <span className="text-green-400 text-sm">Live</span>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
        <div className="flex items-center space-x-3 mb-2">
          <Eye className="w-5 h-5 text-blue-400" />
          <span className="text-gray-300 text-sm">Total Impressions</span>
        </div>
        <div className="text-3xl font-bold text-blue-400">3,247,891</div>
        <div className="text-green-400 text-sm">+15.2% from yesterday</div>
      </div>

      <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
        <div className="flex items-center space-x-3 mb-2">
          <TrendingUp className="w-5 h-5 text-green-400" />
          <span className="text-gray-300 text-sm">Click Rate</span>
        </div>
        <div className="text-3xl font-bold text-green-400">4.7%</div>
        <div className="text-green-400 text-sm">Above industry avg</div>
      </div>

      <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
        <div className="flex items-center space-x-3 mb-2">
          <Activity className="w-5 h-5 text-red-400" />
          <span className="text-gray-300 text-sm">Active Screens</span>
        </div>
        <div className="text-3xl font-bold text-red-400">1,847</div>
        <div className="text-green-400 text-sm">99.1% uptime</div>
      </div>
    </div>

    <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
      <h4 className="text-lg font-semibold mb-4 text-white">Live Route Tracking - Bangalore</h4>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { route: 'MG Road', status: 'Active', ads: 34, color: 'green' },
          { route: 'Brigade Road', status: 'Active', ads: 28, color: 'green' },
          { route: 'Koramangala', status: 'Maintenance', ads: 0, color: 'red' },
          { route: 'Indiranagar', status: 'Active', ads: 42, color: 'green' },
          { route: 'Whitefield', status: 'Active', ads: 19, color: 'green' },
          { route: 'Electronic City', status: 'Active', ads: 25, color: 'green' },
          { route: 'Jayanagar', status: 'Warning', ads: 12, color: 'yellow' },
          { route: 'HSR Layout', status: 'Active', ads: 31, color: 'green' },
        ].map((route, index) => (
          <div key={index} className="bg-black p-3 rounded border border-gray-600">
            <div className="text-white font-medium text-sm">{route.route}</div>
            <div className={`text-${route.color === 'green' ? 'green-400' : route.color === 'red' ? 'red-400' : 'yellow-400'} text-xs`}>{route.status}</div>
            <div className="text-gray-400 text-xs">{route.ads} ads running</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const LocationDashboard = () => (
  <div className="bg-gray-800 text-white p-6 rounded-lg min-h-[500px]">
    <div className="flex items-center justify-between mb-6">
      <h3 className="text-2xl font-bold text-white">Location Targeting - Bangalore Metro</h3>
      <div className="text-blue-400 text-sm">Karnataka Region</div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
        <h4 className="text-lg font-semibold mb-4 text-white">Top Performing Areas</h4>
        <div className="space-y-3">
          {[
            { area: 'UB City Mall', engagement: '9.1%', color: 'green' },
            { area: 'Forum Mall', engagement: '8.4%', color: 'green' },
            { area: 'Orion Mall', engagement: '7.6%', color: 'blue' },
            { area: 'Phoenix MarketCity', engagement: '6.8%', color: 'blue' },
            { area: 'Mantri Square', engagement: '5.9%', color: 'red' },
            { area: 'Garuda Mall', engagement: '5.2%', color: 'red' },
          ].map((area, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-gray-300">{area.area}</span>
              <span className={`text-${area.color === 'green' ? 'green-400' : area.color === 'blue' ? 'blue-400' : 'red-400'} font-semibold`}>{area.engagement}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
        <h4 className="text-lg font-semibold mb-4 text-white">Bangalore Demographics</h4>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-300">Tech Professionals</span>
              <span className="text-blue-400">45%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-blue-400 h-2 rounded-full" style={{ width: '45%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-300">Students</span>
              <span className="text-green-400">28%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-green-400 h-2 rounded-full" style={{ width: '28%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-300">Business Professionals</span>
              <span className="text-red-400">27%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-red-400 h-2 rounded-full" style={{ width: '27%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
      <h4 className="text-lg font-semibold mb-4 text-white">Heat Map - Peak Hours (Bangalore Traffic)</h4>
      <div className="grid grid-cols-6 gap-2">
        {Array.from({ length: 24 }, (_, i) => (
          <div key={i} className="text-center">
            <div className="text-xs text-gray-400 mb-1">{i}:00</div>
            <div
              className={`h-8 rounded ${
                (i >= 8 && i <= 11) || (i >= 18 && i <= 21)
                  ? 'bg-red-500'
                  : i >= 12 && i <= 17
                    ? 'bg-green-500'
                    : 'bg-blue-500'
              }`}
              style={{
                opacity: i >= 6 && i <= 23 ? 0.8 : 0.3,
              }}
            ></div>
          </div>
        ))}
      </div>
      <div className="flex justify-center space-x-6 mt-4 text-xs">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded"></div>
          <span className="text-gray-300">Peak Traffic</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded"></div>
          <span className="text-gray-300">Moderate</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-blue-500 rounded"></div>
          <span className="text-gray-300">Low Traffic</span>
        </div>
      </div>
    </div>
  </div>
);

const ReportingDashboard = () => (
  <div className="bg-gray-800 text-white p-6 rounded-lg min-h-[500px]">
    <div className="flex items-center justify-between mb-6">
      <h3 className="text-2xl font-bold text-white">Transparent Reporting - Bangalore Network</h3>
      <div className="text-green-400 text-sm">100% Verified Data</div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
        <h4 className="text-lg font-semibold mb-4 text-white">Screen Health Status</h4>
        <div className="space-y-4">
          {[
            { screen: 'BLR-001 (MG Road)', status: 'Online', uptime: '99.9%', color: 'green' },
            { screen: 'BLR-002 (Brigade)', status: 'Online', uptime: '98.7%', color: 'green' },
            { screen: 'BLR-003 (Koramangala)', status: 'Maintenance', uptime: '0%', color: 'red' },
            { screen: 'BLR-004 (Indiranagar)', status: 'Online', uptime: '99.2%', color: 'green' },
            { screen: 'BLR-005 (Whitefield)', status: 'Warning', uptime: '87.3%', color: 'yellow' },
            { screen: 'BLR-006 (Electronic City)', status: 'Online', uptime: '96.8%', color: 'green' },
          ].map((screen, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-3 bg-black rounded border border-gray-600"
            >
              <span className="text-gray-300">{screen.screen}</span>
              <div className="flex items-center space-x-3">
                <span className={`text-${screen.color === 'green' ? 'green-400' : screen.color === 'red' ? 'red-400' : 'yellow-400'} text-sm`}>{screen.status}</span>
                <span className="text-gray-400 text-sm">{screen.uptime}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
        <h4 className="text-lg font-semibold mb-4 text-white">Verification Metrics</h4>
        <div className="space-y-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">100%</div>
            <div className="text-gray-300 text-sm">GPS Verified Routes</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">99.4%</div>
            <div className="text-gray-300 text-sm">Timestamp Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-400 mb-2">0.6%</div>
            <div className="text-gray-300 text-sm">False Impressions</div>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
      <h4 className="text-lg font-semibold mb-4 text-white">Real-time Verification Log - Bangalore</h4>
      <div className="space-y-2 max-h-40 overflow-y-auto">
        {[
          { time: '16:45:23', event: 'BLR-001 - Ad impression verified at MG Road Metro', status: 'success' },
          { time: '16:45:19', event: 'GPS location confirmed - Brigade Road Junction', status: 'success' },
          { time: '16:45:15', event: 'BLR-003 - Maintenance mode activated in Koramangala', status: 'warning' },
          {
            time: '16:45:12',
            event: 'Route validation completed - Indiranagar to Whitefield',
            status: 'success',
          },
          { time: '16:45:08', event: 'BLR-004 - High engagement detected near Forum Mall', status: 'info' },
          { time: '16:45:04', event: 'Timestamp synchronization verified across network', status: 'success' },
          { time: '16:45:01', event: 'BLR-006 - Electronic City route optimization complete', status: 'success' },
        ].map((log, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 text-xs p-2 bg-black rounded border border-gray-600"
          >
            <span className="text-gray-500">{log.time}</span>
            <span className="text-gray-300 flex-1">{log.event}</span>
            <span
              className={`
                ${log.status === 'success' ? 'text-green-400' : ''}
                ${log.status === 'warning' ? 'text-red-400' : ''}
                ${log.status === 'info' ? 'text-blue-400' : ''}
              `}
            >
              ●
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Dashboard;
