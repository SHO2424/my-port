import Navigation from '@/components/Layouts/Navigation';
import { useAuth } from '@/hooks/auth';

const AppLayout = ({ children, style }) => {
    const { user } = useAuth({ middleware: 'auth' });

    return (
        <div className="min-h-screen bg-gray-800" style={style}>
            <Navigation user={user} />

            {/* Page Heading */}
            {/* <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    {header}
                </div>
            </header> */}

            {/* Page Content */}
            {/* <main> */}
            {children}
            {/* </main> */}
        </div>
    );
};

export default AppLayout;
