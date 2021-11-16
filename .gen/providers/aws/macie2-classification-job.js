"use strict";
// https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html
// generated from terraform resource schema
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Macie2ClassificationJob = exports.Macie2ClassificationJobUserPausedDetails = void 0;
var cdktf = require("cdktf");
var Macie2ClassificationJobUserPausedDetails = /** @class */ (function (_super) {
    __extends(Macie2ClassificationJobUserPausedDetails, _super);
    function Macie2ClassificationJobUserPausedDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Macie2ClassificationJobUserPausedDetails.prototype, "jobExpiresAt", {
        // job_expires_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('job_expires_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2ClassificationJobUserPausedDetails.prototype, "jobImminentExpirationHealthEventArn", {
        // job_imminent_expiration_health_event_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('job_imminent_expiration_health_event_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2ClassificationJobUserPausedDetails.prototype, "jobPausedAt", {
        // job_paused_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('job_paused_at');
        },
        enumerable: false,
        configurable: true
    });
    return Macie2ClassificationJobUserPausedDetails;
}(cdktf.ComplexComputedList));
exports.Macie2ClassificationJobUserPausedDetails = Macie2ClassificationJobUserPausedDetails;
function macie2ClassificationJobS3JobDefinitionBucketDefinitionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        account_id: cdktf.stringToTerraform(struct.accountId),
        buckets: cdktf.listMapper(cdktf.stringToTerraform)(struct.buckets)
    };
}
function macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparator: cdktf.stringToTerraform(struct.comparator),
        key: cdktf.stringToTerraform(struct.key),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
    };
}
function macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparator: cdktf.stringToTerraform(struct.comparator),
        key: cdktf.stringToTerraform(struct.key),
        target: cdktf.stringToTerraform(struct.target),
        tag_values: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesToTerraform)(struct.tagValues)
    };
}
function macie2ClassificationJobS3JobDefinitionScopingExcludesAndToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        simple_scope_term: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermToTerraform)(struct.simpleScopeTerm),
        tag_scope_term: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermToTerraform)(struct.tagScopeTerm)
    };
}
function macie2ClassificationJobS3JobDefinitionScopingExcludesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        and: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionScopingExcludesAndToTerraform)(struct.and)
    };
}
function macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparator: cdktf.stringToTerraform(struct.comparator),
        key: cdktf.stringToTerraform(struct.key),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
    };
}
function macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparator: cdktf.stringToTerraform(struct.comparator),
        key: cdktf.stringToTerraform(struct.key),
        target: cdktf.stringToTerraform(struct.target),
        tag_values: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesToTerraform)(struct.tagValues)
    };
}
function macie2ClassificationJobS3JobDefinitionScopingIncludesAndToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        simple_scope_term: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermToTerraform)(struct.simpleScopeTerm),
        tag_scope_term: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermToTerraform)(struct.tagScopeTerm)
    };
}
function macie2ClassificationJobS3JobDefinitionScopingIncludesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        and: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionScopingIncludesAndToTerraform)(struct.and)
    };
}
function macie2ClassificationJobS3JobDefinitionScopingToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        excludes: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionScopingExcludesToTerraform)(struct.excludes),
        includes: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionScopingIncludesToTerraform)(struct.includes)
    };
}
function macie2ClassificationJobS3JobDefinitionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket_definitions: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionBucketDefinitionsToTerraform)(struct.bucketDefinitions),
        scoping: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionScopingToTerraform)(struct.scoping)
    };
}
function macie2ClassificationJobScheduleFrequencyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        daily_schedule: cdktf.booleanToTerraform(struct.dailySchedule),
        monthly_schedule: cdktf.numberToTerraform(struct.monthlySchedule),
        weekly_schedule: cdktf.stringToTerraform(struct.weeklySchedule)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html aws_macie2_classification_job}
*/
var Macie2ClassificationJob = /** @class */ (function (_super) {
    __extends(Macie2ClassificationJob, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html aws_macie2_classification_job} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Macie2ClassificationJobConfig
    */
    function Macie2ClassificationJob(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_macie2_classification_job',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._customDataIdentifierIds = config.customDataIdentifierIds;
        _this._description = config.description;
        _this._initialRun = config.initialRun;
        _this._jobStatus = config.jobStatus;
        _this._jobType = config.jobType;
        _this._name = config.name;
        _this._namePrefix = config.namePrefix;
        _this._samplingPercentage = config.samplingPercentage;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._s3JobDefinition = config.s3JobDefinition;
        _this._scheduleFrequency = config.scheduleFrequency;
        return _this;
    }
    Object.defineProperty(Macie2ClassificationJob.prototype, "createdAt", {
        // ==========
        // ATTRIBUTES
        // ==========
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2ClassificationJob.prototype, "customDataIdentifierIds", {
        get: function () {
            return this.getListAttribute('custom_data_identifier_ids');
        },
        set: function (value) {
            this._customDataIdentifierIds = value;
        },
        enumerable: false,
        configurable: true
    });
    Macie2ClassificationJob.prototype.resetCustomDataIdentifierIds = function () {
        this._customDataIdentifierIds = undefined;
    };
    Object.defineProperty(Macie2ClassificationJob.prototype, "customDataIdentifierIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customDataIdentifierIds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2ClassificationJob.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    Macie2ClassificationJob.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(Macie2ClassificationJob.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2ClassificationJob.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2ClassificationJob.prototype, "initialRun", {
        get: function () {
            return this.getBooleanAttribute('initial_run');
        },
        set: function (value) {
            this._initialRun = value;
        },
        enumerable: false,
        configurable: true
    });
    Macie2ClassificationJob.prototype.resetInitialRun = function () {
        this._initialRun = undefined;
    };
    Object.defineProperty(Macie2ClassificationJob.prototype, "initialRunInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._initialRun;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2ClassificationJob.prototype, "jobArn", {
        // job_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('job_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2ClassificationJob.prototype, "jobId", {
        // job_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('job_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2ClassificationJob.prototype, "jobStatus", {
        get: function () {
            return this.getStringAttribute('job_status');
        },
        set: function (value) {
            this._jobStatus = value;
        },
        enumerable: false,
        configurable: true
    });
    Macie2ClassificationJob.prototype.resetJobStatus = function () {
        this._jobStatus = undefined;
    };
    Object.defineProperty(Macie2ClassificationJob.prototype, "jobStatusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._jobStatus;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2ClassificationJob.prototype, "jobType", {
        get: function () {
            return this.getStringAttribute('job_type');
        },
        set: function (value) {
            this._jobType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2ClassificationJob.prototype, "jobTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._jobType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2ClassificationJob.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Macie2ClassificationJob.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(Macie2ClassificationJob.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2ClassificationJob.prototype, "namePrefix", {
        get: function () {
            return this.getStringAttribute('name_prefix');
        },
        set: function (value) {
            this._namePrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    Macie2ClassificationJob.prototype.resetNamePrefix = function () {
        this._namePrefix = undefined;
    };
    Object.defineProperty(Macie2ClassificationJob.prototype, "namePrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._namePrefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2ClassificationJob.prototype, "samplingPercentage", {
        get: function () {
            return this.getNumberAttribute('sampling_percentage');
        },
        set: function (value) {
            this._samplingPercentage = value;
        },
        enumerable: false,
        configurable: true
    });
    Macie2ClassificationJob.prototype.resetSamplingPercentage = function () {
        this._samplingPercentage = undefined;
    };
    Object.defineProperty(Macie2ClassificationJob.prototype, "samplingPercentageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._samplingPercentage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2ClassificationJob.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    Macie2ClassificationJob.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(Macie2ClassificationJob.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2ClassificationJob.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    Macie2ClassificationJob.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(Macie2ClassificationJob.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    // user_paused_details - computed: true, optional: false, required: false
    Macie2ClassificationJob.prototype.userPausedDetails = function (index) {
        return new Macie2ClassificationJobUserPausedDetails(this, 'user_paused_details', index);
    };
    Object.defineProperty(Macie2ClassificationJob.prototype, "s3JobDefinition", {
        get: function () {
            return this.interpolationForAttribute('s3_job_definition');
        },
        set: function (value) {
            this._s3JobDefinition = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2ClassificationJob.prototype, "s3JobDefinitionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._s3JobDefinition;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2ClassificationJob.prototype, "scheduleFrequency", {
        get: function () {
            return this.interpolationForAttribute('schedule_frequency');
        },
        set: function (value) {
            this._scheduleFrequency = value;
        },
        enumerable: false,
        configurable: true
    });
    Macie2ClassificationJob.prototype.resetScheduleFrequency = function () {
        this._scheduleFrequency = undefined;
    };
    Object.defineProperty(Macie2ClassificationJob.prototype, "scheduleFrequencyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._scheduleFrequency;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Macie2ClassificationJob.prototype.synthesizeAttributes = function () {
        return {
            custom_data_identifier_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._customDataIdentifierIds),
            description: cdktf.stringToTerraform(this._description),
            initial_run: cdktf.booleanToTerraform(this._initialRun),
            job_status: cdktf.stringToTerraform(this._jobStatus),
            job_type: cdktf.stringToTerraform(this._jobType),
            name: cdktf.stringToTerraform(this._name),
            name_prefix: cdktf.stringToTerraform(this._namePrefix),
            sampling_percentage: cdktf.numberToTerraform(this._samplingPercentage),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            s3_job_definition: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionToTerraform)(this._s3JobDefinition),
            schedule_frequency: cdktf.listMapper(macie2ClassificationJobScheduleFrequencyToTerraform)(this._scheduleFrequency)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Macie2ClassificationJob.tfResourceType = "aws_macie2_classification_job";
    return Macie2ClassificationJob;
}(cdktf.TerraformResource));
exports.Macie2ClassificationJob = Macie2ClassificationJob;
