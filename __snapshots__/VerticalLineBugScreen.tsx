import {registerSnapshot, Snapshot} from 'pixels-catcher';
import App from '../App';

registerSnapshot(
    class SnapshotClass extends Snapshot {
        static snapshotName = 'Vertical Line Bug Screen';

        renderContent() {
            return (
                <App/>
            )
        }
    },
);