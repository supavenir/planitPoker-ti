import Card from '@/components/card';
import Timer from "@/components/timer";

export default function Vote() {
    return (
        <div className="vote_container">
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

            <div className="cards_row">
                <Card content="100"></Card>
                <Card content="?"></Card>
                <Card content="☕"></Card>
            </div>

            <aside className="rightBar">
                <h3>John DOE</h3>
                <Timer minutes="1" seconds="30"></Timer>
            </aside>
        </div>
    );
}