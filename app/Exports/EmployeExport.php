<?php

namespace App\Exports;

use Illuminate\Http\Request;
use App\Models\Employe;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithMapping;
use Carbon\Carbon;

class EmployeExport implements FromQuery, WithHeadings, ShouldAutoSize, WithMapping
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
        $query = Employe::query();


        $multiFilters = [
            'organization_id',
            'education_level_id',
            'cause_id',
            'work_environment_id',
            'disability_type_id',
            'quot_type_id',
            'status_id',
        ];

        foreach ($multiFilters as $filter) {
            if ($request->filled($filter)) {
                $query->whereIn($filter, $request->$filter);
            }
        }

        /** -------------------------
         *   3) SIMPLE EQUAL FILTER
         * ------------------------ */
        if ($request->filled('company')) {
            $query->where('company', $request->company);
        }

        if ($request->filled('created_at')) {
            $time = Carbon::parse($request->created_at)->timezone('Asia/Tashkent');
            $query->whereYear('created_at', $time->year)
                ->whereMonth('created_at', $time->month);
        }


        return $query->where(function ($q) {
            $q->whereNull('buyruq_raqami')
                ->orWhereNull('ishga_qabul_kuni')
                ->orWhereNull('buyruq_sanasi');
        });
    }

    public function headings(): array
    {
        return [
            'ID',
            'F.I.SH',
            "Tug'ilgan kuni",
            "Malumoti",
            "Oliy uquv yurti",
            "Qabul shakli",
            "Asos",

            "Bo'lim",
            "Uchastka",
            "Lavozimi",

            "Mehnat sharoiti",
            "Telefon raqami",
            "Korxona hisobidan",

            // "Nogironligi",
            // "Kvota",
            "Qaysi jarayonda",
        ];
    }

    public function map($employe): array
    {
        return [
            $employe->id,
            $employe->full_name,
            $employe->birth_date,
            $employe->education_level->name,
            $employe->university,
            $employe->cause->name,
            $employe->cause_text,

            $employe->organization->name,
            $employe->division,
            $employe->profession,

            $employe->work_environment->name,
            $employe->phone,
            $employe->company,

            // $employe->disability_type->name,
            // $employe->quot_type->name,
            $employe->status->name,

        ];
    }
}
