<?php

declare(strict_types=1);

namespace Workbench\App\Nova\Actions;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;
use Laravel\Nova\Actions\Action;
use Laravel\Nova\Actions\ActionResponse;
use Laravel\Nova\Fields\ActionFields;

class ViewJsonSnippetModalAction extends Action
{
    /**
     * The displayable name of the action.
     *
     * @var string
     */
    public $name = 'Show JSON snippet';

    /**
     * Determine where the action redirection should be without confirmation.
     *
     * @var bool
     */
    public $withoutConfirmation = true;

    /**
     * Indicates if this action is available on the resource's table row.
     *
     * @var bool
     */
    public $showInline = true;

    /**
     * Perform the action on the given models.
     *
     * @param ActionFields $fields
     * @param Collection<int, Model> $models
     * @return Action|ActionResponse
     */
    public function handle(ActionFields $fields, Collection $models): Action|ActionResponse
    {
        return Action::modal('modal-response', [
            'title' => 'JSON Snippet',
            'closeButtonText' => 'I\'ve seen enough!',
            'code' => json_encode([
                'lorem' => 'ipsum',
                'dolor' => [
                    'sit',
                    'amet',
                ],
            ], JSON_PRETTY_PRINT),
        ]);
    }
}