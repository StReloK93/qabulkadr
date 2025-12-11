<?php

namespace App\Exports;

use Illuminate\Http\Request;
use App\Models\Suhbat;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithMapping;
use Carbon\Carbon;

class SuhbatsExport implements FromQuery, WithHeadings, ShouldAutoSize, WithMapping
{

    use Exportable;
    protected $request;
    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    public function query()
    {
        $request = $this->request;
        $query = Suhbat::query();


        $multiFilters = [
            'organization_id',
            'creater_id',
        ];

        foreach ($multiFilters as $filter) {
            if ($request->filled($filter)) {
                $query->whereIn($filter, $request->$filter);
            }
        }

        return $query;
    }

    public function headings(): array
    {
        return [
            'ID',
            'F.I.SH',
            "Telefon raqami",
            "Bo'lim",
            "Lavozim",
            "Ijroji",
        ];
    }

    public function map($employe): array
    {
        return [
            $employe->id,
            $employe->name,
            $employe->phone,
            $employe->organization->name,
            $employe->profession,
            $employe->creater->name,
        ];
    }
}
