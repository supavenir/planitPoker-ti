import Card from '@/components/card';

export default function Vote() {
    return (
        <div>
            <h1 className="title">Page vote</h1>
            <Card content="0"></Card>
            <Card content="1"></Card>
        </div>
    );
}