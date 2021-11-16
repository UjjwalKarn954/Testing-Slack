"use strict";
// https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_archive.html
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
exports.CloudwatchEventArchive = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_archive.html aws_cloudwatch_event_archive}
*/
var CloudwatchEventArchive = /** @class */ (function (_super) {
    __extends(CloudwatchEventArchive, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_archive.html aws_cloudwatch_event_archive} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchEventArchiveConfig
    */
    function CloudwatchEventArchive(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_cloudwatch_event_archive',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._description = config.description;
        _this._eventPattern = config.eventPattern;
        _this._eventSourceArn = config.eventSourceArn;
        _this._name = config.name;
        _this._retentionDays = config.retentionDays;
        return _this;
    }
    Object.defineProperty(CloudwatchEventArchive.prototype, "arn", {
        // ==========
        // ATTRIBUTES
        // ==========
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchEventArchive.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchEventArchive.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(CloudwatchEventArchive.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchEventArchive.prototype, "eventPattern", {
        get: function () {
            return this.getStringAttribute('event_pattern');
        },
        set: function (value) {
            this._eventPattern = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchEventArchive.prototype.resetEventPattern = function () {
        this._eventPattern = undefined;
    };
    Object.defineProperty(CloudwatchEventArchive.prototype, "eventPatternInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._eventPattern;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchEventArchive.prototype, "eventSourceArn", {
        get: function () {
            return this.getStringAttribute('event_source_arn');
        },
        set: function (value) {
            this._eventSourceArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchEventArchive.prototype, "eventSourceArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._eventSourceArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchEventArchive.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchEventArchive.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchEventArchive.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchEventArchive.prototype, "retentionDays", {
        get: function () {
            return this.getNumberAttribute('retention_days');
        },
        set: function (value) {
            this._retentionDays = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchEventArchive.prototype.resetRetentionDays = function () {
        this._retentionDays = undefined;
    };
    Object.defineProperty(CloudwatchEventArchive.prototype, "retentionDaysInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._retentionDays;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    CloudwatchEventArchive.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            event_pattern: cdktf.stringToTerraform(this._eventPattern),
            event_source_arn: cdktf.stringToTerraform(this._eventSourceArn),
            name: cdktf.stringToTerraform(this._name),
            retention_days: cdktf.numberToTerraform(this._retentionDays)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    CloudwatchEventArchive.tfResourceType = "aws_cloudwatch_event_archive";
    return CloudwatchEventArchive;
}(cdktf.TerraformResource));
exports.CloudwatchEventArchive = CloudwatchEventArchive;
