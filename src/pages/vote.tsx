import Card from '@/components/card';

export default function Vote() {
    return (
        <div>
            <h1 className="title">Page vote</h1>
            <div className="cards_row">
                <Card content="0"></Card>
                <Card content="1/2"></Card>
                <Card content="1"></Card>
                <Card content="2"></Card>
                <Card content="3"></Card>
            </div>
            <div className="cards_row">
                <Card content="5"></Card>
                <Card content="8"></Card>
                <Card content="13"></Card>
                <Card content="20"></Card>
                <Card content="40"></Card>
            </div>
        </div>
    );
}