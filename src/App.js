import * as React from 'react';
import GDDataIntegration from './GDDataIntegration';

export default function App() {
    const [alternate, setAlternate] = React.useState(false);

    const workspaceId = !alternate ? WORKSPACE : WORKSPACE_2;
    const visualizationId = !alternate ? VISUALIZATION : VISUALIZATION_2;
    const dashboardId = !alternate ? DASHBOARD : DASHBOARD_2;

    return <div>
        <h1>GoodData Data Integration Example</h1>
        <button onClick={() => setAlternate(!alternate)}>Toggle Workspace</button>
        <GDDataIntegration />
        <gd-insight
            style={{width: '100%', height: 400}}
            insight={visualizationId}
            workspace={workspaceId}
        ></gd-insight>
        <gd-dashboard
            style={{width: '100%', height: 800}}
            dashboard={dashboardId}
            workspace={workspaceId}
        ></gd-dashboard>
    </div>;
}
